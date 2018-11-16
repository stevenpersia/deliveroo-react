import React from 'react';

class InfoRestaurant extends React.Component {
	render() {
		return (
			<div className="info-restaurant">
				<div className="container">
					<div className="content-info">
						<h1>{this.props.name}</h1>
						<p>{this.props.description}</p>
					</div>
					<div className="image-info">
						<img src={this.props.image} alt={this.props.name} />
					</div>
				</div>
			</div>
		);
	}
}

export default InfoRestaurant;
