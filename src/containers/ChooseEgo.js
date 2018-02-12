import { connect } from 'react-redux'
import TheComponent from '../components/views/ChooseEgoView';
import actions from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
    	egos: state.egos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        choose: (id) => dispatch({type: actions.CHOOSE_EGO, id})
    }
}

const ChooseEgo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default ChooseEgo;