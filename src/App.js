import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing';
import Purpose from './Components/Pages/About/Purpose';
import Donate from './Components/Pages/Donate';
import Program from './Components/Pages/Program/ProgrammingStruncture';
import Careers from './Components/Pages/About/Careers';
import Services from './Components/Pages/Program/Services';
import Involved from './Components/Pages/Program/Involved';
import Awards from './Components/Pages/Community/Awards';
import Events from './Components/Pages/Community/Events';
import Partners from './Components/Pages/Community/Partners';
import Resources from './Components/Pages/Participants/Resources';
import Contact from './Components/Pages/About/Contact';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/Resources'>
						<Resources />
					</Route>
					<Route path='/Contact'>
						<Contact />
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
					<Route path='/Purpose'>
						<Purpose />
					</Route>
					<Route path='/Donate'>
						<Donate />
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
