import axios from 'axios'

const USER_API_BASE_URL='http://localhost:8787/users'

class ApiService{

    addUser(user){  //Adding the User
        return axios.post(USER_API_BASE_URL,user)
    }

    fetchUsers(){   // Getting list of users
        return axios.get(USER_API_BASE_URL)
    }
}

export default new ApiService()