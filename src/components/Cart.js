import React from 'react';

class Cart extends React.Component {
	render() {
		const products = [];
		for (let i = 0; i < this.props.addedProducts.length; i++) {
			products.push(
				<li key={this.props.addedProducts[i].id}>
					<div
						class="cssCircle minusSign"
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
						class="cssCircle plusSign"
						onClick={() => {
							this.props.increment(this.props.addedProducts[i].id);
						}}
					>
						&#43;
					</div>
					<span>{this.props.addedProducts[i].productName}</span>
					<span className="price">
						{Math.round(
							this.props.addedProducts[i].price *
								this.props.addedProducts[i].quantity *
								100
						) / 100}
						€
					</span>
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
