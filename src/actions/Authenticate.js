import { UserService } from '../services';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

const authenticateUser = (username, password) => {
    return {
        type: AUTHENTICATE_USER,
        payload: UserService.login(username, password)
    };
};

export { authenticateUser };
