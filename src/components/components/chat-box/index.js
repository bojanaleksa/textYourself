import React from 'react';
import PropTypes from 'prop-types';

import Cloud from '../chat-cloud/';
import './style.scss';

class ReactChatBox extends React.Component {
  	constructor(props) {
  		super(props);

      this.state = {
        conversation: this.props.conversation
      }

  	}

    componentDidMount() {
        this.addNextConversationItem();
    }

    componentWillReceiveProps(nextProps) {
        let index = this.state.conversation.length;
        if (index < this.props.conversation.length || nextProps.conversation.length === this.props.conversation.length) return;
        this.addNextConversationItem(nextProps.conversation[index]);
    }

    addNextConversationItem(item) {
        let index = this.state.conversation.length;
        if (!item && !this.props.conversation[index]) {
            this.props.onShowingAll && this.props.onShowingAll();
            return;
        }
        this.setState({
            conversation: [...this.state.conversation, item || this.props.conversation[index]]
        });
        setTimeout(() => {
            this.addNextConversationItem();
        }, this.props.delay);
    }

    render() {
      return <div className="react-chat-box">
          {this.state.conversation.map((item, key) => 
              <Cloud key={key} delay={this.props.delay} {...item} click={this.props.readMessage}/>
          )}
      </div>
    }
}

ReactChatBox.propTypes = {
	delay: PropTypes.number,
  onShowingAll: PropTypes.func
	// TODO: conversation: shapeOf
}

ReactChatBox.defaultProps = {
  delay: 1000,
  conversation: [{}]
}

export default ReactChatBox;
