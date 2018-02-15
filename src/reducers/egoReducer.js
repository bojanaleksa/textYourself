import actions from '../actions';

const fake = [{name: 'poslovni', id: 1}, {name: 'kucni', id: 2}];

function egoReducer(state = fake, action) {
    switch (action.type) {
    	case actions.CREATE_EGO: return [...state, {name: action.name, id: state[state.length - 1].id + 1}]
        default: return state
    }
}

export default egoReducer;
