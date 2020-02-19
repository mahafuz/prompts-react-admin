import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainRoute from './route/MainRoute';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				{
					MainRoute.map((route, index) => {
						return(
							<Route exact key={index} path={route.path} component={route.component} />
						)
					})
				}
				{/* <Route path="/" exact component={Profile} />
				<Route path="/admin" component={Admin} />
				<Route path="/settings" component={Settings} />
				<Route path="/performance" component={Performance} />
				<Route path="/activities" component={Activities} />
				<Route path="/growth" component={Growth} />
				<Route path="/team" component={Team} /> */}
			</Switch>
		</Router>
	);
}

export default App;
