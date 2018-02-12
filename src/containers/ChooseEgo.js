import { connect } from 'react-redux'
import TheComponent from '../components/views/ChooseEgoView';
import actions from '../actions';

import {history} from '../store';

const mapStateToProps = (state, ownProps) => {
    return {
    	egos: state.egos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        choose: (id) => {
        	dispatch({type: actions.CHOOSE_EGO, id});
        	history.push('/converser');
        }
    }
}

const ChooseEgo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default ChooseEgo;