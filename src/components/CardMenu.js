import React from 'react';
import EmptyImage from '../assets/images/empty.jpg';

class CardMenu extends React.Component {
	renderImage(url) {
		if (url) {
			return <img src={url} alt={this.props.title} />;
		} else {
			return <img src={EmptyImage} alt="DELIVROO" />;
		}
	}

	render() {
		return (
			<div className="card-menu">
				<div className="content">
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
					<span className="price">{this.props.price} €</span>
				</div>
				<div className="image-menu">{this.renderImage(this.props.img)}</div>
			</div>
		);
	}
}

export default CardMenu;
