import { combineReducers } from "redux";

import actions from '../actions';

function currentEgoReducer(state = 1, action) {
    switch (action.type) {
    	case actions.CHOOSE_EGO: return action.id
        default: return state
    }
}

function currentConverserReducer(state = 2, action) {
	switch (action.type) {
		case action.CHOOSE_CONVERSER: return action.id
		default: return state
	}
}

const currentReducer = combineReducers({
	ego: currentEgoReducer,
	converser: currentConverserReducer
});

export default currentReducer;
