import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>Hello World</p>
				<AwesomeComponent />
			</div>
		);
	}
}

const app = document.getElementById('app');
render(<App/>, app);