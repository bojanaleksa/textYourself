import React from 'react';
import PropTypes from 'prop-types';

import IconRead from 'material-ui/svg-icons/action/done';
import IconUnread from 'material-ui/svg-icons/action/highlight-off';

import './style.scss';

const Dots = props => <div className="react-chat-cloud-dots">
  <div></div>
  <div></div>
  <div></div>
</div>

class ReactChatCloud extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			read: this.props.read
		};

		this.readMessage = this.readMessage.bind(this, props.id);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({show: true});
		}, this.props.delay);
	}

	readMessage(id) {
		this.setState({read: true});
		this.props.click(id);
	}

	render() {
		let props = this.props;
		return <div className={"react-chat-cloud " + props.alignment} onClick={this.readMessage} >
			<div className="react-chat-cloud-avatar">
				<div style={{backgroundImage:'url(http://eightbitavatar.herokuapp.com/?id='+props.name+'&s='+props.gender+'&size=400)'}}></div>
			</div>
			{this.state.read &&
				<IconRead color="green"/>
			}
			{!this.state.read &&
				<IconUnread color="red"/>
			}
			<div className={"react-chat-cloud-text " + ' ' + (props.read ? '' : 'unread')}>{this.state.show ? props.message : props.loader}{this.state.show && props.component}</div>
		</div>
	}
}


ReactChatCloud.propTypes = {
	message: PropTypes.string,
	delay: PropTypes.number,
  	alignment: PropTypes.oneOf(['left', 'right']),
  	gender: PropTypes.oneOf(['male', 'female']),
  	component: PropTypes.element,
  	loader: PropTypes.element,
  	read: PropTypes.bool
}

ReactChatCloud.defaultProps = {
	delay: 2000,
	read: true,
	name: 'batica',
	gender: 'male',
  	alignment: 'left',
  	message: 'insert message here',
  	loader: <Dots />,
  	click: () => {}
}

export default ReactChatCloud;
