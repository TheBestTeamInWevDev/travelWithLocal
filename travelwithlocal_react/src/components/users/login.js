import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./login-screen-style.css"

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
                    userConstructor.setUserType(credentials.role)
                    history.push("/search")
                }
            })
    }

    return(
        <div className={"wbdv-sign-in-body"}>
            {/*<h1>Login</h1>*/}
            {/*<input*/}
            {/*    value={credentials.username}*/}
            {/*    onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}*/}
            {/*    className="form-control"*/}
            {/*    placeholder="username"/>*/}
            {/*<input*/}
            {/*    value={credentials.password}*/}
            {/*    onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}*/}
            {/*    className="form-control"*/}
            {/*    placeholder="password"/>*/}
            {/*<button*/}
            {/*    onClick={login}*/}
            {/*    className="btn btn-primary">*/}
            {/*    Login*/}
            {/*</button>*/}
            {/*<Link to="/register">*/}
            {/*    Register*/}
            {/*</Link>*/}

            <div className="container">
                <h1 className="wbdv-sign-in-title">Sign In</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
                            Username </label>
                        <div className="col-sm-10">
                            {/*<input className="form-control wbdv-username-input"*/}
                            {/*       id="username"*/}
                            {/*       placeholder="Alice"/>*/}
                            <input
                                value={credentials.username}
                                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                                className="form-control wbdv-username-input"
                                placeholder="username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label wbdv-password-font">
                            Password </label>
                        <div className="col-sm-10">
                            {/*<input type="password" className="form-control wbdv-password-input"*/}
                            {/*       id="password" placeholder="123qwe#$%"/>*/}
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                className="form-control wbdv-password-input"
                                placeholder="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-block wbdv-btn-login"
                               onClick={login} role="button">
                                Sign in
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <a className="wbdv-forget-label" href="#">Forgot Password?</a>
                                </div>
                                <div className="col-4" align="center">
                                    <Link className="wbdv-cancel-label" to="/">
                                        Cancel
                                    </Link>
                                </div>
                                <div className="col-4 ">
                                    <Link className="float-right wbdv-signup-label" to="/register">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;