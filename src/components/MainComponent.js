import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent.js';
import DishDetail from './DishdetailComponent.js';
import Contact from './ContactUsComponent.js';
import About from './AboutUsComponent.js';
import Footer from './FooterComponent.js';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment, fetchDishes} from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, comment, author) => dispatch(addComment(dishId, rating, comment, author)),
        fetchDishes : () => dispatch(fetchDishes())
    }
};

const mapStateToProps = (state) => {
    return {
        dishes:state.dishes,
        leaders:state.leaders,
        promotions:state.promotions,
        comments:state.comments
    }
};


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchDishes()
  }

  render() {

    const HomePage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter(dish=>{
            return dish.featured
          })[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errmess}
          promotion={this.props.promotions.filter(promo=>{
            return promo.featured
          })[0]}
          leader={this.props.leaders.filter(leader=>{
            return leader.featured
          })[0]}
        />
      )
    }

    const selectedDish = ({match}) => {
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish=>dish.id === parseInt(match.params.dishId, 10))[0]}
          dishLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errmess}
          comments={this.props.comments.filter(comment=>comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment}
        />
      )
    }

    return (
      <div>
        <Header/>
             <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishId" component={selectedDish}/>
                <Route path="/contactus" component={Contact}/>
                <Route path = "/aboutus" component={() => <About leaders = {this.props.leaders}/>}/>
                <Redirect to = '/home'/>
             </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
