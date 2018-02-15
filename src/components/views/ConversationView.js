import React from "react";
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import ChatBox from '../components/chat-box';

class ConversationView extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			newMessage: ''
		}

		this.handleNewMessage = this.handleNewMessage.bind(this);
		this.submitNewMessage = this.submitNewMessage.bind(this);
		this.submitNewMessageOnEnter = this.submitNewMessageOnEnter.bind(this);
	}

	componentWillMount() {
		if (this.props.noEgo) {
			this.props.buildFirstEgo();
			return;
		}
		if (this.props.noConverser) this.props.chooseConverser();
	}

	handleNewMessage(event) {
		this.setState({newMessage: event.target.value});
	}

	submitNewMessage(event) {
		this.props.submit({
			text: this.state.newMessage,
			sender: this.props.sender.id,
			receiver: this.props.receiver.id
		});
		this.setState({newMessage: ''});
	}

	submitNewMessageOnEnter(event) {
		if (event.key !== 'Enter') return;
		this.submitNewMessage();		
	}

	render() {
		let {props} = this;
		return <div>
			<ChatBox conversation={props.messages} readMessage={props.markAsRead} />

			<TextField hintText="Type new message" fullWidth 
			value={this.state.newMessage} onChange={this.handleNewMessage} onKeyDown={this.submitNewMessageOnEnter} />
			<FlatButton label="submit" fullWidth onClick={this.submitNewMessage} />
		</div>
	}
}

ConversationView.propTypes = {
	markAsRead: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired
};

export default ConversationView;
