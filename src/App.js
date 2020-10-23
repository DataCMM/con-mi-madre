import React from 'react';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
