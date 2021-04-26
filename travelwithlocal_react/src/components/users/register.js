import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./register-screen-style.css"

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
                    userConstructor.setName(credentials.username)
                    userConstructor.setUserStatus(1)
                    userConstructor.setUserType(credentials.role)
                    history.push("/profile")
                }
            })
    }
    return(
        // <div>
        //     <h1>Register</h1>
        //     <input
        //         value={credentials.username}
        //         onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
        //         className="form-control"
        //         placeholder="username"/>
        //     <input
        //         value={credentials.email}
        //         onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
        //         className="form-control"
        //         placeholder="email"/>
        //     <select onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}
        //         value={credentials.role}
        //         className="form-control">
        //         <option value={"TRAVELLER"}>Traveller</option>
        //         <option value={"LOCALGUIDE"}>Local Guide</option>
        //     </select>
        //     <input
        //         value={credentials.password}
        //         onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
        //         className="form-control"
        //         placeholder="password"/>
        //     <input
        //         className="form-control"
        //         placeholder="validate password"/>
        //     <button onClick={register} className="btn btn-primary">
        //         Register
        //     </button>
        //     <Link to="/login">
        //         Login
        //     </Link>
        // </div>
        <div className="wbdv-sign-up-body">
            <div className="container">
                <h1 className="wbdv-sign-up-title">Sign Up</h1>
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
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
                            Email </label>
                        <div className="col-sm-10">
                            {/*<input className="form-control wbdv-username-input"*/}
                            {/*       id="username"*/}
                            {/*       placeholder="Alice"/>*/}
                            <input
                                    value={credentials.email}
                                    onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                                    className="form-control"
                                    placeholder="email"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
                            User Type </label>
                        <div className="col-sm-10">
                            {/*<input className="form-control wbdv-username-input"*/}
                            {/*       id="username"*/}
                            {/*       placeholder="Alice"/>*/}
                            {/*<input*/}
                            {/*    value={credentials.email}*/}
                            {/*    onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}*/}
                            {/*    className="form-control"*/}
                            {/*    placeholder="email"/>*/}
                                 <select onChange={(e) =>
                                 {setCredentials({...credentials, role: e.target.value})}}
                                     value={credentials.role}
                                     className="form-control">
                                     <option value={"TRAVELLER"}>Traveller</option>
                                     <option value={"LOCALGUIDE"}>Local Guide</option>
                                 </select>
                        </div>
                    </div>



                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label wbdv-password-font">
                            Password </label>
                        <div className="col-sm-10">
                        {/*<div className="col-sm-10">*/}
                        {/*    <input type="password" className="form-control wbdv-password-input"*/}
                        {/*           id="password" placeholder="123qwe#$%">*/}
                            <input
                                value={credentials.password}
                                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                className="form-control"
                                placeholder="password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="verifyPassword" className="col-sm-2 col-form-label wbdv-verify-password-font">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="verifyPassword" className="form-control wbdv-field wbdv-verify-password-input"
                                   id="verifyPassword" placeholder="123qwe#$%"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-block wbdv-btn-signup" onClick={register}
                               role="button">
                                Sign up
                            </a>
                            <div className="row">
                                <div className="col-6">
                                    <Link className="wbdv-login-label" to="/login">
                                        Log in
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="float-right wbdv-cancel-label" to="/">
                                        Cancel
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

export default Register;