import { connect } from 'react-redux'
import TheComponent from '../components/views/CreateEgoView';
import actions from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
    	egos: state.egos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        create: (name) => dispatch({type: actions.CREATE_EGO, name})
    }
}

const CreateEgo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default CreateEgo;