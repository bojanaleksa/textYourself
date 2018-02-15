import actions from '../actions';

const fake = [{
	id: 1,
	sender: 1,
	receiver: 2,
	text: 'idemo dalje',
	read: true
}, {
	id: 2,
	sender: 2,
	receiver: 1,
	text: 'niko nam nista ne moze',
	read: false
}];

function messageReducer(state = fake, action) {
    switch (action.type) {
    	case actions.MESSAGE_SEND: return [...state, {...action.message, read: false, id: state[state.length - 1].id + 1}]
    	case actions.MESSAGE_READ: return state.map( message => {
    		if (message.id !== action.id) return message;
    		return {...message, read: true}
    	})
        default: return state
    }
}

export default messageReducer;
