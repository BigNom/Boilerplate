import React from 'react';

import Navbar from '../components/navbar';

class App extends React.Component {
	render() {
		return (
			<div>
                <Navbar/>
				<h1>Boilerplate Project</h1>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.node,
};

export default App;
