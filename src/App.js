import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing';
import About from './Components/Pages/About';
import Donate from './Components/Pages/Donate';
import Team from './Components/Pages/OurTeam';
import Program from './Components/Pages/Program';
import Careers from './Components/Pages/Careers';
import Services from './Components/Pages/Services';
import Involved from './Components/Pages/Involved';
import Awards from './Components/Pages/Awards';
import Events from './Components/Pages/Events';
import Partners from './Components/Pages/Partners';
import Resources from './Components/Pages/Resources';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/Resources'>
						<Resources />
					</Route>
					<Route path='/Partners'>
						<Partners />
					</Route>
					<Route path='/Awards'>
						<Awards />
					</Route>
					<Route path='/Events'>
						<Events />
					</Route>
					<Route path='/Involved'>
						<Involved />
					</Route>
					<Route path='/Services'>
						<Services />
					</Route>
					<Route path='/Careers'>
						<Careers />
					</Route>
					<Route path='/About'>
						<About />
					</Route>
					<Route path='/Donate'>
						<Donate />
					</Route>
					<Route path='/Team'>
						<Team />
					</Route>
					<Route path='/Program'>
						<Program />
					</Route>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
