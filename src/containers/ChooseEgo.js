import { connect } from 'react-redux'
import TheComponent from '../components/views/ChooseEgoView';
import actions from '../actions';

import {history} from '../store';

const mapStateToProps = (state, ownProps) => {
    let messages = state.messages.filter(message => !message.read);
    return {
    	egos: state.egos.map(ego => ({
            ...ego,
            messageCount: messages.filter(message => message.receiver === ego.id).length
        })),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        choose: (id) => {
        	dispatch({type: actions.CHOOSE_EGO, id});
        	history.push('/');
        }
    }
}

const ChooseEgo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default ChooseEgo;