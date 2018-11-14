import React from 'react';

class ServiceMenu extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h2>{this.props.title}</h2>
				</div>
				<div className="service-menu">{this.props.menuCards}</div>
			</div>
		);
	}
}

export default ServiceMenu;
