import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Header from './components/Header';
import './App.css';
import Checkout from './components/Checkout';

class App extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/restaurant" component={Restaurant} />
						<Route path="/checkout" component={Checkout} />
					</div>
				</Router>
			</main>
		);
	}
}

export default App;
