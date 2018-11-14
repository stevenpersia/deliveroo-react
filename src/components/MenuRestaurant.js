import React from 'react';
import axios from 'axios';
import CardMenu from './CardMenu';
import ServiceMenu from './ServiceMenu';
import EmptyImage from '../assets/images/empty.jpg';

class MenuRestaurant extends React.Component {
	state = {
		menu: {}
	};

	render() {
		if (Object.keys(this.state.menu).length === 0) {
			return <p>Loading ...</p>;
		}

		const entries = Object.entries(this.state.menu);
		const keys = Object.keys(this.state.menu);

		console.log(entries[0].length);
		console.log(entries[0][1][1].title);

		const menuCardComponents = [];
		// for (let i = 0; i < keys.length; i++) {
		// 	if (entries[i][1].length > 0) {
		// 		menuCardComponents.push(<TitleMenu title={keys[i]} />);
		// 	}
		// 	for (let j = 0; j < entries[i][1].length; j++) {
		// 		if (!entries[i][1][j].picture) {
		// 			menuCardComponents.push(
		// 				<CardMenu
		// 					title={entries[i][1][j].title}
		// 					text={entries[i][1][j].description}
		// 					price={entries[i][1][j].price}
		// 					img={EmptyImage}
		// 				/>
		// 			);
		// 		} else {
		// 			menuCardComponents.push(
		// 				<CardMenu
		// 					title={entries[i][1][j].title}
		// 					text={entries[i][1][j].description}
		// 					price={entries[i][1][j].price}
		// 					img={entries[i][1][j].picture}
		// 				/>
		// 			);
		// 		}
		// 	}
		// }
		let servicesContainers = [];

		for (let i = 0; i < keys.length; i++) {
			if (entries[i][1].length > 0) {
				let menuCards = [];
				for (let j = 0; j < entries[i][1].length; j++) {
					if (!entries[i][1][j].picture) {
						menuCards.push(
							<CardMenu
								title={entries[i][1][j].title}
								text={entries[i][1][j].description}
								price={entries[i][1][j].price}
								img={EmptyImage}
							/>
						);
					} else {
						menuCards.push(
							<CardMenu
								title={entries[i][1][j].title}
								text={entries[i][1][j].description}
								price={entries[i][1][j].price}
								img={entries[i][1][j].picture}
							/>
						);
					}
				}
				servicesContainers.push(
					<ServiceMenu title={keys[i]} menuCards={menuCards} />
				);
			}
		}

		return <div className="content-restaurant">{servicesContainers}</div>;
	}

	componentDidMount() {
		axios.get(`https://deliveroo-api.now.sh/menu`).then(response => {
			this.setState({
				menu: response.data.menu
			});
		});
	}
}

export default MenuRestaurant;
