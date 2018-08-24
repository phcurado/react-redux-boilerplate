/*eslint no-console: "error"*/
import api from '../api';

class UserService {
    login = (username, password) => {
        return api
            .post('/login', {
                username,
                password
            })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    };
}
export default new UserService();
