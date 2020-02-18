import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Settings from './components/Settings';
import Performance from './components/Performance';
import Activities from './components/Activities';
import Growth from './components/Growth';
import Team from './components/Team';

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={Profile} />
			<Route path="/admin" exact component={Admin} />
			<Route path="/settings" exact component={Settings} />
			<Route path="/performance" exact component={Performance} />
			<Route path="/activities" exact component={Activities} />
			<Route path="/growth" exact component={Growth} />
			<Route path="/team" exact component={Team} />
		</Router>
	);
}

export default App;
