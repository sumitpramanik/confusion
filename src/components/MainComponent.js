import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent.js';
import DishDetail from './DishdetailComponent.js';
import Contact from './ContactUsComponent.js';
import About from './AboutUsComponent.js';
import {DISHES} from '../shared/dishes.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {COMMENTS} from '../shared/comments.js';
import Footer from './FooterComponent.js';
import {Switch, Redirect, Route} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter(dish=>{
            return dish.featured
          })[0]}
          promotion={this.state.promotions.filter(promo=>{
            return promo.featured
          })[0]}
          leader={this.state.leaders.filter(leader=>{
            return leader.featured
          })[0]}
        />
      )
    }

    const selectedDish = ({match}) => {
      return (
        <DishDetail 
          dish={this.state.dishes.filter(dish=>dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter(comment=>comment.dishId === parseInt(match.params.dishId, 10))}
        />
      )
    }

    return (
      <div>
        <Header/>
             <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
                <Route path="/menu/:dishId" component={selectedDish}/> 
                <Route path="/contactus" component={Contact}/>
                <Route path = "/aboutus" component={() => <About leaders = {this.state.leaders}/>}/>
                <Redirect to = '/home'/>
             </Switch> 
        <Footer/>
      </div>
    );
  }
}

export default Main;
