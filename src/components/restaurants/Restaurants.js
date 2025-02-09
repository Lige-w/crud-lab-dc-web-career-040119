import React, { Component } from 'react';
import Restaurant from "./Restaurant";


class Restaurants extends Component {
  render() {
    const {restaurants} = this.props

    const restaurantComponents = restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant}/>
    ))

    return(
      <ul>
        {restaurantComponents}
      </ul>
    );
  }
};

export default Restaurants;