import React from 'react';
import './Checkout.css';

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

		return (
			<div className="checkout-page">
				<div className="angled-hero-header" />
				<div className="restaurant-name">
					<h1>{this.props.location.restaurant.name}</h1>
				</div>
				<div className="checkout-content">
					<div className="checkout-form-section">
						<h2>Adresse de livraison</h2>
						<div className="checkout-form">
							<form>
								<div className="flat">
									<label>Etage et numéro d'appartement</label>
									<input
										name="flat"
										type="text"
										value={this.state.flat}
										onChange={this.handleInputChange}
										placeholder="Appartement n°15"
									/>
								</div>
								<div className="code">
									<label>Digicode</label>
									<input
										name="code"
										type="text"
										value={this.state.code}
										onChange={this.handleInputChange}
										placeholder="8123"
									/>
								</div>
								<div className="street_address">
									<label>Adresse</label>
									<input
										name="street_address"
										type="text"
										value={this.state.street_address}
										onChange={this.handleInputChange}
										placeholder="100 rue de Rivoli"
									/>
								</div>
								<div className="postcode">
									<label>Code postal</label>
									<input
										name="postcode"
										type="text"
										value={this.state.postcode}
										onChange={this.handleInputChange}
										placeholder="75001"
									/>
								</div>
								<div className="city">
									<label>Ville</label>
									<input
										name="city"
										type="text"
										value={this.state.city}
										onChange={this.handleInputChange}
										placeholder="Paris"
									/>
								</div>
								<div className="phone">
									<label>Numéro de téléphone</label>
									<input
										name="phone"
										type="text"
										value={this.state.phone}
										onChange={this.handleInputChange}
										placeholder="+33 09 77 55 03 30"
									/>
								</div>
								<div className="instructions">
									<label> Instructions pour votre livreur ?</label>
									<textarea
										name="instructions"
										value={this.state.instructions}
										onChange={this.handleInputChange}
										placeholder="C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous arrivez."
									/>
								</div>
							</form>
						</div>
						<div className="checkout-form-btn-section">
							<p>
								Votre commande arrivera dans <span>15 - 25 minutes</span>.
							</p>
							<button className="checkout-form-btn" onClick={this.handleClick}>
								Confirmer & payer
							</button>
						</div>
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
		);
	}
}

export default Checkout;
