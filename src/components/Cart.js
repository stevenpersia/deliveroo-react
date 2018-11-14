import React from 'react';

class Cart extends React.Component {
	render() {
		return (
			<div className="cart">
				<a className="btn disabled">Valider mon panier</a>
				<p>Votre panier est vide</p>
			</div>
		);
	}
}

export default Cart;
