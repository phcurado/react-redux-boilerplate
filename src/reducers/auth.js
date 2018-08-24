import { AUTHENTICATE_USER } from '../actions/Authenticate';

const auth = (state = null, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return action.payload;
    }

    return state;
};

export default auth;
