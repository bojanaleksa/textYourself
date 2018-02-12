import { connect } from 'react-redux'
import TheComponent from '../components/App';
import actions from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
    	location: ownProps.location.pathname.replace('/', ''),
        ego: state.current.ego
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate: () => {
          dispatch({type: actions.BASIC_ACTION})
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default App;