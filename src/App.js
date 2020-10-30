import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing';
import About from './Components/Pages/About';
import Donate from './Components/Pages/Donate';
import News from './Components/Pages/News';
import Program from './Components/Pages/Program';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/About'>
						<About />
					</Route>
					<Route path='/Donate'>
						<Donate />
					</Route>
					<Route path='/News'>
						<News />
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
