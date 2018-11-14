import React from 'react';
import axios from 'axios';

class InfoRestaurant extends React.Component {
	state = {
		data: []
	};

	render() {
		return (
			<div className="info-restaurant">
				<div className="container">
					<div className="content-info">
						<h1>{this.state.data.name}</h1>
						<p>{this.state.data.description}</p>
					</div>
					<div className="image-info">
						<img src={this.state.data.picture} alt={this.state.data.name} />
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		axios.get(`https://deliveroo-api.now.sh/menu`).then(response => {
			this.setState({
				data: response.data.restaurant
			});
		});
	}
}

export default InfoRestaurant;
