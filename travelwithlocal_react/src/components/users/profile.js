import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./profile-screen-style.css"

const Profile = () => {
    const [credentials, setCredentials] = useState()
    useEffect(() => {
        userService.profile()
            .then((credentials) => {
                setCredentials(credentials)
            })
    }, [])

    const history = useHistory()
    const logout = () => {
        // userConstructor.setName("")
        // userConstructor.setUserStatus(0)
        // userConstructor.setUserType("")
        // nav back to home
        setCredentials({username: '', password: ''})
        userService.logout().
        then()
        history.push("/")
    }

    const update = () => {
        userService.update(credentials)
            .then(() => {
                // go to the profile
                // userConstructor.setName(credentials.username)
                // userConstructor.setUserStatus(1)
                // userConstructor.setUserType(credentials.role)
                // setCurrentUser(credentials)

                setCredentials(credentials)

                console.log(JSON.stringify(credentials))
                // history.push("/profile")
            })
    }

    return(

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                    <br/>
                </div>

                <div className="col-6">
                    <div className="m-2 d-none d-lg-block">
                        <Link to="./">
                            <button type="button" className="btn btn-secondary float-right">Home</button>
                        </Link>
                        <Link to="./search">
                            <button type="button" className="btn btn-light float-right">Search</button>
                        </Link>
                    </div>
                </div>
            </div>


            <h3 id="creat_account">
                My profile
            </h3>
            <br/>
            {
                !credentials &&
                <h1 id="wbdv-profile-font">
                    User is not logged in
                </h1>
            }

            {
                credentials &&
                <div className="row">

                    <div className="col-sm-6">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail"
                                   className="col-sm-2 col-form-label wbdv-profile-font">
                                Username
                            </label>
                            <div className="col-sm-10 ">
                                <input type="text"
                                       readOnly
                                       className="form-control-2 wbdv-profile-input"
                                       id="staticEmail"
                                       value={credentials.username}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password"
                                   className="col-sm-2 col-form-label wbdv-profile-font">
                                password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control-2 wbdv-profile-input"
                                    onChange={(e) => {
                                        setCredentials({...credentials, password: e.target.value})
                                    }}
                                    value={credentials.password}
                                    // placeholder={currentUser.password}
                                />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email"
                                   className="col-sm-2 col-form-label wbdv-profile-font">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input type="email"
                                       onChange={(e) => {
                                           setCredentials({...credentials, email: e.target.value})
                                       }}
                                    // placeholder={currentUser.email}
                                       value={credentials.email}
                                       className="form-control-2"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label wbdv-profile-font">
                                User Type
                            </label>
                            <div className="col-sm-10">
                                <input
                                    readOnly
                                    className="form-control-2 wbdv-profile-input"
                                    value={credentials.role}
                                />
                            </div>
                        </div>
                        {
                            credentials.role === "TRAVELLER" &&

                            <div className="mb-3 row">
                                <label htmlFor="email"
                                       className="col-sm-2 col-form-label wbdv-profile-font">
                                    Favourite Places
                                </label>
                                <div className="col-sm-10">

                                    <ul className="fav_input">
                                        {credentials.favoritePlaces && credentials.favoritePlaces.map((el) => <li
                                            className={" wbdv-profile-input"}>{el.location}</li>)}
                                        {!credentials.favoritePlaces &&
                                        <div className={"wbdv-profile-input"}>Currently Unavailable</div>}
                                    </ul>
                                </div>
                            </div>
                        }
                        {
                            credentials.role === "LOCALGUIDE" &&
                            <>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label wbdv-profile-font">
                                    Location
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        readOnly
                                        className="form-control-2 wbdv-profile-input"
                                        value={credentials.location}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="email"
                                       className="col-sm-2 col-form-label wbdv-profile-font">
                                    Requested
                                </label>
                                <div className="col-sm-10">
                                    <ul className="fav_input">
                                        {credentials.listOfRequests && credentials.listOfRequests.map((el) => <li
                                            className={"wbdv-profile-input"}>{el.username}</li>)}
                                        {!credentials.listOfRequests &&
                                        <div className={"wbdv-profile-input"}>Currently Unavailable</div>}
                                    </ul>
                                </div>
                            </div>
                            </>
                        }

                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <a className="signup_btn btn wbdv-btn-update"
                                   onClick={update}
                                   role="button">
                                    Update
                                </a>
                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <a className="cancel_btn btn  btn-block"
                                   onClick={logout}
                                   role="button">
                                    Logout
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-6">
                        {/*<img id= "register_photo"*/}
                        {/*     src="https://i.ibb.co/Px26TCK/c8e12074089c506df35d89787a2664d6.jpg"*/}
                        {/*     alt="register photo"*/}
                        {/*     width="500" height="600"*/}
                        {/*/>*/}
                        <i id="profile" className="profile_icon fas fa-user-edit"></i>
                        <h3 id="welcome">WELCOME TO TRAVEL WITH LOCALS</h3>
                        <h4 id="slogan">It’s time for a new adventure!</h4>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile
