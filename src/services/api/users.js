import axios from 'axios'

export default {
    fetchUsers(search) {
        return axios.get('/search/users', {
            params: {q: search}
        });
    }
}
