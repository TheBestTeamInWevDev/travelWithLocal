import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'

const Register = () => {
    const [credentials, setCredentials] = useState({username: '', password: '', email: '', role: 'TRAVELLER'})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("username already taken")
                } else {
                    // go to the profile
                    history.push("/profile")
                }
            })
    }
    return(
        <div>
            <h1>Register</h1>
            <input
                value={credentials.username}
                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                className="form-control"
                placeholder="username"/>
            <input
                value={credentials.email}
                onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                className="form-control"
                placeholder="email"/>
            <select onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}
                value={credentials.role}
                className="form-control">
                <option value={"TRAVELLER"}>Traveller</option>
                <option value={"LOCALGUIDE"}>Local Guide</option>
            </select>
            <input
                value={credentials.password}
                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                className="form-control"
                placeholder="password"/>
            <input
                className="form-control"
                placeholder="validate password"/>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>
            <Link to="/login">
                Login
            </Link>
        </div>
    )
}

export default Register;