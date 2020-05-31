import axios from "axios";

const signup = (username, password) => {
    return axios
        // .post("/api/auth/signup", {
        .post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
            username: username,
            password: password
        })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err.response.data;
        });
};

const login = (username, password) => {
    return axios
        // .post("/api/auth/login", {
        .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
            username: username,
            password: password
        })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err.response.data;
        });
};

const logout = () => {
    // axios.delete("/api/auth/logout");
    axios.delete(`${process.env.REACT_APP_API_URL}/api/auth/logout`);
};

export { signup, login, logout };
