import { connect } from 'react-redux'
import TheComponent from '../components/views/ConversationView';
import actions from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
    	messages: state.messages.filter( message => 
            (message.sender === state.current.ego && message.receiver === state.current.converser) || 
            (message.sender === state.current.converser && message.receiver === state.current.sender)),
        sender: state.egos.find(ego => ego.id === state.current.ego),
        receiver: state.egos.find(ego => ego.id === state.current.converser)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit: (message) => dispatch({type: actions.MESSAGE_SEND, message}),
        markAsRead: (id) => dispatch({type: actions.MESSAGE_READ, id})
    }
}

const Conversation = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default Conversation;