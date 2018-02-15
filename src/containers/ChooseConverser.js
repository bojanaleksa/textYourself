import { connect } from 'react-redux'
import TheComponent from '../components/views/ChooseConverserView';
import actions from '../actions';

import {history} from '../store';

const mapStateToProps = (state, ownProps) => {
    let messages = state.messages.filter(message =>  message.receiver == state.current.ego); 
    return {
        noEgo: !state.egos.length || !state.current.ego,
    	egos: state.egos.filter(ego => ego.id !== state.current.ego).map(ego => ({
            ...ego,
            messageCount: messages.filter( message => message.sender === ego.id && !message.read).length
        }))
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buildFirstEgo:() => history.push('/ego'),
        choose: (id) => {
        	dispatch({type: actions.CHOOSE_CONVERSER, id});
        	history.push('/conversation');
        }
    }
}

const ChooseConverser = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default ChooseConverser;