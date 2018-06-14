import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent.js';
import Contact from './ContactUsComponent.js';
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

    return (
      <div>
        <Header/>
             <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} /> 
                <Route path="/contactus" component={Contact}/>
                <Redirect to = '/home'/>
             </Switch> 
        <Footer/>
      </div>
    );
  }
}

export default Main;
