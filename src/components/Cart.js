import React from 'react';

class Cart extends React.Component {
	render() {
		const products = [];
		for (let i = 0; i < this.props.addedProducts.length; i++) {
			console.log(this.props.addedProducts[i]);
			products.push(
				<li>
					<span className="quantity-btn">-</span>
					<span className="quantity">
						{this.props.addedProducts[i].quantity}
					</span>
					<span className="quantity-btn">+</span>
					<span>{this.props.addedProducts[i].productName}</span>
					<span className="price">{this.props.addedProducts[i].price} €</span>
				</li>
			);
		}
		return (
			<div className="cart">
				<a href="/" className="btn enabled">
					Valider mon panier
				</a>
				<div className="products-list">
					<ul>{products}</ul>
				</div>
			</div>
		);
	}
}

export default Cart;
