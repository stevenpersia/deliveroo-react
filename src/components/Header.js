import React from 'react';
import LogoImage from '../assets/images/logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container">
					<img src={LogoImage} className="logo" alt="" />
				</div>
			</header>
		);
	}
}

export default Header;
