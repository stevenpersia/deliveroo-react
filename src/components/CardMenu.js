import React from 'react';

class CardMenu extends React.Component {
	render() {
		return (
			<div className="card-menu">
				<div className="content">
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
					<span className="price">{this.props.price} €</span>
				</div>
				<div className="image-menu">
					<img src={this.props.img} alt="" />
				</div>
			</div>
		);
	}
}

export default CardMenu;
