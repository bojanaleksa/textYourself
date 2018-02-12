import React from "react";
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class CreateEgoView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	save() {
		this.props.create(this.state.name);
	}

	render() {
		return <div>
			<TextField floatingLabelText="New ego name" fullWidth
				value={this.state.name} onChange={this.handleChange} />
		    <FlatButton label="Save" fullWidth onClick={this.save} />
		</div>
	}
}

CreateEgoView.propTypes = {
	create: PropTypes.func.isRequired
}

export default CreateEgoView;
