import actions from '../actions';

function egoReducer(state = [{name: 'poslovni', id: 1}, {name: 'kucni', id: 2}], action) {
    switch (action.type) {
    	case actions.CREATE_EGO: return [...state, {name: action.name, id: 3}]
        default: return state
    }
}

export default egoReducer;
