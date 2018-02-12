import { connect } from 'react-redux'
import TheComponent from '../components/views/ChooseConverserView';
import actions from '../actions';

import {history} from '../store';

const mapStateToProps = (state, ownProps) => {
    return {
    	egos: state.egos.filter(ego => ego.id !== state.current.ego)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
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