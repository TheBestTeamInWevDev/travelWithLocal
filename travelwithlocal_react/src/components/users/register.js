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
        <div className="container">

            <div>
                <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                <br/>
            </div>

            <div className="d-none d-lg-block">
                <Link to="./">
                    <button type="button" className="btn btn-secondary float-right">Home</button>
                </Link>
                <Link to="./login">
                    <button type="button" className="btn btn-light float-right">Login</button>
                </Link>
            </div>

            <h3 id="creat_account">
                Create account
            </h3>
            <br/>

            <div className="row">
                <div className="col-sm-6">
                    <div className="mb-3 row">
                        <label htmlFor="role">
                        <i className="left_icon fas fa-smile-wink"></i>
                        </label>
                        <div className="col-sm-10">
                            <select onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}
                                    value={credentials.role}

                                    id="role" className="form-control-2">
                                {/*<option>select your role</option>*/}
                                <option disabled>select your role</option>
                                <option value={"TRAVELLER"}>traveler</option>
                                <option value={"LOCALGUIDE"}>local</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="gender">
                            <i className="left_icon fas fa-users"></i>
                            </label>
                        <div className="col-sm-10">
                            <select id="gender" className="form-control-2"placeholder="select your gender">
                                <option disabled>select your gender</option>
                                <option>male</option>
                                <option>female</option>
                                <option>Other</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="username">
                            <i className="left_icon fas fa-user"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   value={credentials.username}
                                   onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                                   placeholder="username"
                                   className="form-control-2"
                                   id="username"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="email" >
                            <i className=" left_icon fas fa-envelope"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   value={credentials.email}
                                   onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                                   className="form-control-2"
                                   placeholder="email"
                                   id="email"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" >
                            <i className="left_icon fas fa-unlock"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   value={credentials.password}
                                   onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                   className="form-control-2"
                                   placeholder="password"
                                   id="password"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="verify" >
                            <i className="left_icon fas fa-keyboard"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control-2"
                                   placeholder="verify password"
                                   id="verify"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {/*<label*/}
                        {/*    className="col-sm-2 col-form-label">*/}
                        {/*</label>*/}
                        <div className="col-sm-10">
                            <a className="signup_btn btn btn-block"
                               onClick={register}
                               href="./profile">
                                Sign up
                            </a>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        {/*<label*/}
                        {/*    className="col-sm-2 col-form-label">*/}
                        {/*</label>*/}
                        <div className="col-sm-10">
                            <p className="float-left">Already have an account?</p>
                            <a className="float-right"
                               href="./login">Login</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <img id= "register_photo"
                         src="https://i.ibb.co/Px26TCK/c8e12074089c506df35d89787a2664d6.jpg"
                         alt="register photo"
                         width="500" height="600"
                    />
                </div>
            </div>
        </div>
    )

    //     <div className="wbdv-sign-up-body">
    //         <div className="container">
    //             <h1 className="wbdv-sign-up-title">Sign Up</h1>
    //             <form>
    //                 <div className="form-group row">
    //                     <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
    //                         Username </label>
    //                     <div className="col-sm-10">
    //                         {/*<input className="form-control wbdv-username-input"*/}
    //                         {/*       id="username"*/}
    //                         {/*       placeholder="Alice"/>*/}
    //                         <input
    //                             value={credentials.username}
    //                             onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
    //                             className="form-control wbdv-username-input"
    //                             placeholder="username"/>
    //                     </div>
    //                 </div>
    //                 <div className="form-group row">
    //                     <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
    //                         Email </label>
    //                     <div className="col-sm-10">
    //                         {/*<input className="form-control wbdv-username-input"*/}
    //                         {/*       id="username"*/}
    //                         {/*       placeholder="Alice"/>*/}
    //                         <input
    //                                 value={credentials.email}
    //                                 onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
    //                                 className="form-control"
    //                                 placeholder="email"/>
    //                     </div>
    //                 </div>
    //
    //                 <div className="form-group row">
    //                     <label htmlFor="username" className="col-sm-2 col-form-label wbdv-username-font">
    //                         User Type </label>
    //                     <div className="col-sm-10">
    //                         {/*<input className="form-control wbdv-username-input"*/}
    //                         {/*       id="username"*/}
    //                         {/*       placeholder="Alice"/>*/}
    //                         {/*<input*/}
    //                         {/*    value={credentials.email}*/}
    //                         {/*    onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}*/}
    //                         {/*    className="form-control"*/}
    //                         {/*    placeholder="email"/>*/}
    //                              <select onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}
    //                                  value={credentials.role}
    //                                  className="form-control">
    //                                  <option value={"TRAVELLER"}>Traveller</option>
    //                                  <option value={"LOCALGUIDE"}>Local Guide</option>
    //                              </select>
    //                     </div>
    //                 </div>
    //
    //
    //
    //                 <div className="form-group row">
    //                     <label htmlFor="password" className="col-sm-2 col-form-label wbdv-password-font">
    //                         Password </label>
    //                     <div className="col-sm-10">
    //                     {/*<div className="col-sm-10">*/}
    //                     {/*    <input type="password" className="form-control wbdv-password-input"*/}
    //                     {/*           id="password" placeholder="123qwe#$%">*/}
    //                         <input
    //                             value={credentials.password}
    //                             onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
    //                             className="form-control"
    //                             placeholder="password"/>
    //                     </div>
    //                 </div>
    //
    //                 <div className="form-group row">
    //                     <label htmlFor="verifyPassword" className="col-sm-2 col-form-label wbdv-verify-password-font">
    //                         Verify Password </label>
    //                     <div className="col-sm-10">
    //                         <input type="verifyPassword" className="form-control wbdv-field wbdv-verify-password-input"
    //                                id="verifyPassword" placeholder="123qwe#$%"/>
    //                     </div>
    //                 </div>
    //
    //                 <div className="form-group row">
    //                     <label className="col-sm-2 col-form-label"></label>
    //                     <div className="col-sm-10">
    //                         <a className="btn btn-block wbdv-btn-signup" onClick={register}
    //                            role="button">
    //                             Sign up
    //                         </a>
    //                         <div className="row">
    //                             <div className="col-6">
    //                                 <Link className="wbdv-login-label" to="/login">
    //                                     Log in
    //                                 </Link>
    //                             </div>
    //                             <div className="col-6">
    //                                 <Link className="float-right wbdv-cancel-label" to="/">
    //                                     Cancel
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default Register;