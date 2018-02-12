import React from "react";
import PropTypes from 'prop-types';

import MainMenu from './MainMenu';

class App extends React.Component {

	componentWillMount() {
		this.props.onCreate();
	}

 	render() {
    	return <div>
    		<MainMenu location={this.props.location}/>
    		<div>We are here: {this.props.location} </div>
    		{this.props.children}
    	</div>
  	}

}

App.propTypes = {
	onCreate: PropTypes.func.isRequired,
	location: PropTypes.string
}

App.defaultProps = {

}

export default App;