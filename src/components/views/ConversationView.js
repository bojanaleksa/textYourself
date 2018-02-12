import React from "react";
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {background: 'silver', borderRadius: '5px'};

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
			<List>
			{props.messages.map( (message, key) => 
				<ListItem key={key} primaryText={message.text}
					innerDivStyle={!message.read && message.sender === props.receiver.id ? style : {}}
					onClick={props.markAsRead.bind(this, message.id)}
					leftAvatar={message.sender === props.sender.id ? <Avatar>{props.sender.name.slice(0, 2)}</Avatar> : undefined}
					rightAvatar={message.sender === props.receiver.id ? <Avatar>{props.receiver.name.slice(0, 2)}</Avatar> : undefined}
				/>
			)}
			</List>

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
