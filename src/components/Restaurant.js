import React from 'react';
import axios from 'axios';
import InfoRestaurant from './InfoRestaurant';
import MenuRestaurant from './MenuRestaurant';
import CardMenu from './CardMenu';
import ContainerCard from './ContainerCard';
import Cart from './Cart';

class Restaurant extends React.Component {
	state = {
		menu: {},
		cart: [
			// {id: "ID", quantity: 1, productName: "", price: 10}
		]
	};

	render() {
		if (Object.keys(this.state.menu).length === 0) {
			return <p>Loading ...</p>;
		}

		const entries = Object.entries(this.state.menu);
		const keys = Object.keys(this.state.menu);

		let containerCards = [];

		// Grab & Push menu cards & cart
		for (let i = 0; i < keys.length; i++) {
			if (entries[i][1].length > 0) {
				let menuCards = [];
				for (let j = 0; j < entries[i][1].length; j++) {
					menuCards.push(
						<CardMenu
							key={entries[i][1][j].id}
							title={entries[i][1][j].title}
							text={entries[i][1][j].description}
							price={entries[i][1][j].price}
							img={entries[i][1][j].picture}
							onClick={() => {
								const oldCart = this.state.cart;
								const newCart = [...oldCart];

								newCart.push({
									id: entries[i][1][j].id,
									quantity: 1,
									productName: entries[i][1][j].title,
									price: entries[i][1][j].price
								});

								this.setState({
									cart: newCart
								});
							}}
						/>
					);
				}
				containerCards.push(
					<ContainerCard
						key={`services${keys[i]}`}
						title={keys[i]}
						menuCards={menuCards}
					/>
				);
			}
		}
		return (
			<div id="restaurant">
				<InfoRestaurant />
				<div className="container flex-container">
					<div className="menu-restaurant">
						<MenuRestaurant content={containerCards} />
					</div>
					<div className="sidebar-restaurant">
						<Cart addedProducts={this.state.cart} />
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		axios.get(`https://deliveroo-api.now.sh/menu`).then(response => {
			this.setState({
				menu: response.data.menu
			});
		});
	}
}

export default Restaurant;
