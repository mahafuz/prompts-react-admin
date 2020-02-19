import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Admin from '../components/Admin';
import Settings from '../components/Settings';
import Performance from '../components/Performance';
import Activities from '../components/Activities';
import Growth from '../components/Growth';
import Team from '../components/Team';

const MainRoute = [
	{ path: '/', component: Profile, exact: true },
	{ path: '/profile', component: Profile },
	{ path: '/admin', component: Admin},
	{ path: '/settings', component: Settings },
	{ path: '/performance', component: Performance },
	{ path: '/activities', component: Activities },
	{ path: '/growth', component: Growth},
	{ path: '/team', component: Team}
];

export default MainRoute;