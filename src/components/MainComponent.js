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
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {postComment, fetchDishes, fetchComments, fetchPromos} from "../redux/ActionCreators";


const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (dishId, rating, comment, author) => dispatch(postComment(dishId, rating, comment, author)),
        fetchDishes : () => dispatch(fetchDishes()),
        fetchPromos : () => dispatch(fetchPromos()),
        fetchComments : () => dispatch(fetchComments()),
        resetFeedbackForm: ()=>dispatch(actions.reset('feedback'))
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
      this.props.fetchDishes();
      this.props.fetchPromos();
      this.props.fetchComments();
  }

  render() {

    const HomePage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter(dish=>{return dish.featured})[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errmess}
          promotion={this.props.promotions.promotions.filter(promo=>{return promo.featured})[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errmess}
          leader={this.props.leaders.filter(leader=>{return leader.featured})[0]}
        />
      )
    }

    const selectedDish = ({match}) => {
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish=>dish.id === parseInt(match.params.dishId, 10))[0]}
          dishLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errmess}
          comments={this.props.comments.comments.filter(comment=>comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errmess}
          postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header/>
          <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                 <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={selectedDish}/>
                    <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Route path = "/aboutus" component={() => <About leaders = {this.props.leaders}/>}/>
                    <Redirect to = '/home'/>
                 </Switch>
              </CSSTransition>
          </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
