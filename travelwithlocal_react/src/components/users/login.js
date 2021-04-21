import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";

const Login = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("login failed, try again")
                } else {
                    userConstructor.setName(credentials.username)
                    userConstructor.setUserStatus(1)
                    history.push("/search")
                }
            })
    }

    return(
        <div>
            <h1>Login</h1>
            <input
                value={credentials.username}
                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                className="form-control"
                placeholder="username"/>
            <input
                value={credentials.password}
                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                className="form-control"
                placeholder="password"/>
            <button
                onClick={login}
                className="btn btn-primary">
                Login
            </button>
            <Link to="/register">
                Register
            </Link>
        </div>
    )
}

export default Login;