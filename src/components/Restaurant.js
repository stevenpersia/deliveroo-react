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

		// Grab & Push menu cards in cart
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
							handleClick={() => {
								const oldCart = this.state.cart;
								const newCart = [...oldCart];
								let productExists = false;

								for (let k = 0; k < newCart.length; k++) {
									if (newCart[k].id === entries[i][1][j].id) {
										newCart[k].quantity++;
										productExists = true;
									}
								}

								if (productExists === false) {
									newCart.push({
										id: entries[i][1][j].id,
										quantity: 1,
										productName: entries[i][1][j].title,
										price: entries[i][1][j].price
									});
								}

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
						<Cart
							addedProducts={this.state.cart}
							decrement={id => {
								const newCart = [...this.state.cart];

								for (let i = 0; i < newCart.length; i++) {
									if (newCart[i].id === id && newCart[i].quantity > 1) {
										newCart[i].quantity--;
									}
								}
								this.setState({
									cart: newCart
								});
							}}
							increment={id => {
								const newCart = [...this.state.cart];

								for (let i = 0; i < newCart.length; i++) {
									if (newCart[i].id === id) {
										newCart[i].quantity++;
									}
								}
								this.setState({
									cart: newCart
								});
							}}
						/>
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
