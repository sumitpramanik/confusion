import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent.js';
import dishes from '../shared/dishes.js';
import DishDetail from './DishdetailComponet.js';
import Footer from './FooterComponent.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:dishes,
      selectedDish:null
    }
  }
  selectDish(dishId){
    this.setState({selectedDish : dishId})
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu 
            dishes={this.state.dishes}
            onClick={(dishId)=>{this.selectDish(dishId)}}
        />
        <DishDetail dish={this.state.dishes.filter(dish=>dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
