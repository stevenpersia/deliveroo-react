import React from 'react';
import InfoRestaurant from './InfoRestaurant';
import MenuRestaurant from './MenuRestaurant';
import Cart from './Cart';

class Restaurant extends React.Component {
	render() {
		return (
			<div id="restaurant">
				<InfoRestaurant />
				<div className="container flex-container">
					<div className="menu-restaurant">
						<MenuRestaurant />
					</div>
					<div className="sidebar-restaurant">
						<Cart />
					</div>
				</div>
			</div>
		);
	}
}

export default Restaurant;
