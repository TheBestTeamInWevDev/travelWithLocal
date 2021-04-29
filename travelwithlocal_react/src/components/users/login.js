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
                    history.goBack()
                }
            })
    }


    return (

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div>
                            <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                            <br/>
                        </div>
                    </div>

                    <div className="col-6 mt-2">

                            <Link to="./">
                                <button type="button" className="btn btn-secondary float-right">Home</button>
                            </Link>
                            <Link to="./register">
                                <button type="button" className="btn btn-light float-right">Register</button>
                            </Link>

                    </div>
                </div>


                <h3 id="welcome_back">Welcome back! Please login to your account</h3>
                <br/>

                <form>
                <div className="form-group row">
                    <div className="col-sm-6">

                        <div className="mb-3 row form-group">
                            <label htmlFor="username">
                                <i className="left_icon fas fa-user"></i>
                            </label>
                            <div className="col-sm-10">
                                <input type="text"
                                       value={credentials.username}
                                       onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                                       className="form-control-2"
                                       id="username"
                                       placeholder="enter your username"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="inputPassword">
                                <i className="left_icon fas fa-unlock"></i>
                            </label>
                            <div className="col-sm-10">
                                <input type="password"
                                       value={credentials.password}
                                       onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                       className="form-control-2"
                                       placeholder="password"
                                       id="inputPassword"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            {/*<label*/}
                            {/*    className="col-sm-2 col-form-label">*/}
                            {/*</label>*/}
                            <div className="col-sm-10">
                                <a className="signup_btn btn btn-block"
                                   onClick={login} role="button">
                                    Login in
                                </a>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            {/*<label*/}
                            {/*    className="col-sm-2 col-form-label">*/}
                            {/*</label>*/}
                            <div className="col-sm-10">
                                <a className="cancel_btn btn btn-block"
                                   href="./">
                                    Cancel
                                </a>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            {/*<label*/}
                            {/*    className="col-sm-2 col-form-label">*/}
                            {/*</label>*/}
                            <div className="col-sm-10">
                                <p className="float-left">Forgot Password?</p>
                                <a className="float-right" href="./register">Sign Up</a>
                            </div>
                        </div>



                    </div>
                    <div className="col-sm-6">
                        <img id= "login_photo"
                             src="https://i.ibb.co/Bcw990h/67783ab4b9ad6eddc23d8d95c65409e4.jpg"
                             alt="login photo"
                             width="500" height="600"
                        />
                    </div>

                </div>

                </form>

            </div>

        )

}

export default Login;