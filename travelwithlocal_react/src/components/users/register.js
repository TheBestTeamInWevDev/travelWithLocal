
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./register-screen-style.css"

const Register = () => {
    const [credentials, setCredentials] = useState({username: '', password: '', email: '', role: 'TRAVELLER', location: ''})
    const history = useHistory()

    const register = () => {
        // add alert:
        const passValue = document.getElementById("password").value;
        const confpassValue = document.getElementById("verify").value;
        if(passValue !== confpassValue) {
            window.alert("Passwords do not match!")
        } else {
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
                        history.push("./profile")
                        // window.location.pathname = "./profile";
                    }
                })
        }
    }
    // const checkReenter = () => {
    //     // add alert:
    //     const passValue = document.getElementById("password").value;
    //     const confpassValue = document.getElementById("verify").value;
    //     if(passValue !== confpassValue) {
    //         window.alert("Passwords do not match!")
    //     }
    // }
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">

                    <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                    <br/>

                </div>

                <div className="col-6">
                    <div className="d-none d-lg-block m-2">
                        <Link to="./">
                            <button type="button" className="btn btn-secondary float-right">Home</button>
                        </Link>
                        <Link to="./login">
                            <button type="button" className="btn btn-light float-right">Login</button>
                        </Link>
                    </div>
                </div>

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

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="gender">*/}
                    {/*        <i className="left_icon fas fa-users"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <select id="gender" className="form-control-2"placeholder="select your gender">*/}
                    {/*            <option disabled>select your gender</option>*/}
                    {/*            <option>male</option>*/}
                    {/*            <option>female</option>*/}
                    {/*            <option>Other</option>*/}
                    {/*            <option>Prefer not to say</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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
                    {
                        credentials.role === "LOCALGUIDE" &&
                        <div className="mb-3 row">
                            <label htmlFor="username">
                                <i className="left_icon fas fa-map-marked"></i>
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    value={credentials.location}
                                    onChange={(e) => {
                                        setCredentials({...credentials, location: e.target.value})
                                    }}
                                    className="form-control-2"
                                    placeholder="location"/>
                            </div>
                        </div>
                    }

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
                                   id="verify"
                                   // onChange={checkReenter}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">

                                <a className="signup_btn btn btn-block"
                                   onClick={register}
                                   href="./profile"
                                >
                                    Sign up
                                </a>

                        </div>
                    </div>

                    <div className="mb-3 row">
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
}

export default Register;