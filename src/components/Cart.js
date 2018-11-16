import React from 'react';

import './Cart.css';

class Cart extends React.Component {
	render() {
		const products = [];
		for (let i = 0; i < this.props.addedProducts.length; i++) {
			products.push(
				<li key={this.props.addedProducts[i].id}>
					<div className="change-quantity">
						<div
							className="cssCircle minusSign"
							onClick={() => {
								this.props.decrement(this.props.addedProducts[i].id);
							}}
						>
							&#8211;
						</div>
						<span className="quantity">
							{this.props.addedProducts[i].quantity}
						</span>
						<div
							className="cssCircle plusSign"
							onClick={() => {
								this.props.increment(this.props.addedProducts[i].id);
							}}
						>
							&#43;
						</div>
					</div>
					<div className="product-name">
						{this.props.addedProducts[i].productName}
					</div>
					<div className="price">
						{Math.round(this.props.addedProducts[i].price * 100) / 100}€
					</div>
				</li>
			);
		}
		return (
			<div>
				<div className="products-list">
					<ul>{products}</ul>
				</div>
				<div className="sous-total">
					<div>
						<span className="text">Sous-total</span>
						<span>{this.props.renderSubTotal.toFixed(2)} €</span>
					</div>
					<div>
						<span className="text">Frais de livraison</span>
						<span>{this.props.renderDeliveryFee} €</span>
					</div>
				</div>
				<div className="total">
					<div>
						<span className="text">Total</span>
						<span>{this.props.renderTotal.toFixed(2)} €</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;
