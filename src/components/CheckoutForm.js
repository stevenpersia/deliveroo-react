import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

var style = {
	base: {
		color: '#32325d',
		lineHeight: '18px',
		fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
		fontSmoothing: 'antialiased',
		fontSize: '16px',
		'::placeholder': {
			color: '#aab7c4'
		},
		border: 'solid 1px #bac3c3'
	},
	invalid: {
		color: '#fa755a',
		iconColor: '#fa755a'
	}
};

class CheckoutForm extends Component {
	handleSubmit = event => {
		event.preventDefault();
		this.props.stripe
			.createToken({
				name: 'Customer 1',
				address_line1: this.props.street_address,
				address_line2: this.props.flat,
				address_zip: this.props.postcode,
				address_city: this.props.city
			})
			.then(({ token }) => {
				axios
					.post('https://b6f7a08d.ngrok.io/api', {
						token
					})
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			});
	};

	render() {
		return (
			<div>
				<div className="checkout-form">
					<form onSubmit={this.handleSubmit}>
						<div className="flat">
							<label>Etage et numéro d'appartement</label>
							<input
								name="flat"
								type="text"
								value={this.props.flat}
								onChange={this.props.onChange}
								placeholder="Appartement n°15"
							/>
						</div>
						<div className="code">
							<label>Digicode</label>
							<input
								name="code"
								type="text"
								value={this.props.code}
								onChange={this.props.onChange}
								placeholder="8123"
							/>
						</div>
						<div className="street_address">
							<label>Adresse</label>
							<input
								name="street_address"
								type="text"
								value={this.props.street_address}
								onChange={this.props.onChange}
								placeholder="100 rue de Rivoli"
							/>
						</div>
						<div className="postcode">
							<label>Code postal</label>
							<input
								name="postcode"
								type="text"
								value={this.props.postcode}
								onChange={this.props.onChange}
								placeholder="75001"
							/>
						</div>
						<div className="city">
							<label>Ville</label>
							<input
								name="city"
								type="text"
								value={this.props.city}
								onChange={this.props.onChange}
								placeholder="Paris"
							/>
						</div>
						<div className="phone">
							<label>Numéro de téléphone</label>
							<input
								name="phone"
								type="text"
								value={this.props.phone}
								onChange={this.props.onChange}
								placeholder="+33 09 77 55 03 30"
							/>
						</div>
						<div className="instructions">
							<label> Instructions pour votre livreur ?</label>
							<textarea
								name="instructions"
								value={this.props.instructions}
								onChange={this.props.onChange}
								placeholder="C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous arrivez."
							/>
						</div>
						<div style={{ width: '100%', margin: '0 10px' }}>
							<div
								style={{
									border: 'solid 1px #333333',
									padding: 10,
									borderRadius: 3
								}}
							>
								<CardElement style={style} />
							</div>
						</div>
						<div className="checkout-form-btn-section">
							<p>
								Votre commande arrivera dans <span>15 - 25 minutes</span>.
							</p>
							<button className="checkout-form-btn">
								Confirmer la commande
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);
