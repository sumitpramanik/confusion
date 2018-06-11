import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent.js';
import dishes from '../shared/dishes.js';
import DishDetail from './DishdetailComponet.js';

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu 
            dishes={this.state.dishes}
            onClick={(dishId)=>{this.selectDish(dishId)}}
        />
        <DishDetail dish={this.state.dishes.filter(dish=>dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
