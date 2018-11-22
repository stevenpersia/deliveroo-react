import React from 'react';
import './Checkout.css';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends React.Component {
	state = {
		flat: '',
		code: '',
		street_address: '',
		postcode: '',
		city: '',
		phone: '',
		instructions: ''
	};

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleClick = () => {
		console.log(this.state);
	};

	render() {
		const checkoutCart = [];
		let subTotalCart = 0;
		const deliveryFee = 2.5;
		let restaurantName = '';

		if (this.props.location.cart) {
			for (let i = 0; i < this.props.location.cart.length; i++) {
				checkoutCart.push(
					<li key={this.props.location.cart[i].id}>
						<div className="qty-product">
							<span>{this.props.location.cart[i].quantity}x</span>
							<span>{this.props.location.cart[i].productName}</span>
						</div>

						<span>{this.props.location.cart[i].price} €</span>
					</li>
				);
				subTotalCart +=
					this.props.location.cart[i].quantity *
					this.props.location.cart[i].price;
			}
			restaurantName = this.props.location.restaurant.name;
		}

		return (
			<Elements>
				<div className="checkout-page">
					<div className="angled-hero-header" />
					<div className="restaurant-name">
						<h1>{restaurantName}</h1>
					</div>
					<div className="checkout-content">
						<div className="checkout-form-section">
							<h2>Adresse de livraison</h2>
							<Elements>
								<CheckoutForm
									onChange={this.handleInputChange}
									flat={this.state.flat}
									code={this.state.code}
									street_address={this.state.street_address}
									postcode={this.state.postcode}
									city={this.state.city}
									phone={this.state.phone}
									instructions={this.state.instructions}
								/>
							</Elements>
						</div>
						<div className="checkout-cart-section">
							<h2>Panier</h2>
							<div className="checkout-cart">
								<div className="checkout-products">{checkoutCart}</div>
								<div className="checkout-subtotal-fee">
									<div className="checkout-subtotal">
										<span>Sous-total</span>
										<span>{subTotalCart.toFixed(2)} €</span>
									</div>

									<div className="checkout-fee">
										<span>Frais de livraison</span>
										<span>{deliveryFee} €</span>
									</div>
								</div>
								<div className="checkout-total">
									<span>Total</span>
									<span>{(subTotalCart + deliveryFee).toFixed(2)} €</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Elements>
		);
	}
}

export default Checkout;
