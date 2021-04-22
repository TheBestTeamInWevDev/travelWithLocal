import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./profile-screen-style.css"

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({username: '', password: ''})
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [])
    const history = useHistory()
    const logout = () => {
        userConstructor.setName("")
        userConstructor.setUserStatus(0)
        userConstructor.setUserType("")
        // nav back to home
        setCurrentUser({username: '', password: ''})
        userService.logout().
        then()
        history.push("/")
    }
    return(
        <div className={"wbdv-profile-body"}>
            <h1>Profile</h1>
            {/*{JSON.stringify(currentUser)}*/}
            {/*<h3>Welcome {currentUser.username}</h3>*/}
            <div className="container">
                <div className="mb-3 row">
                    <label htmlFor="staticEmail"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Username
                    </label>
                    <div className="col-sm-10 ">
                        <input type="text"
                               readOnly
                               className="form-control wbdv-profile-input"
                               id="staticEmail"
                               value={currentUser.username}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-profile-input"
                               value={currentUser.password}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email"
                               className="form-control wbdv-profile-input"
                               value={currentUser.email}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        User Type
                    </label>
                    <div className="col-sm-10">
                        <input type="email"
                               className="form-control wbdv-profile-input"
                               value={currentUser.role}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Favourite Places
                    </label>
                    <div className="col-sm-10">

                        <ul>
                            {currentUser.favoritePlaces && currentUser.favoritePlaces.map((el) => <li className={"wbdv-profile-input"}>{el.location}</li> )}
                            {!currentUser.favoritePlaces && <div className={"wbdv-profile-input"}>Currently Unavailable</div>}
                        </ul>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-block wbdv-btn-update"
                           href="#"
                           role="button">
                            Update
                        </a>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-danger btn-block"
                           onClick={logout}
                           role="button">
                            Logout
                        </a>
                    </div>
                </div>

            </div>
            {/*<button*/}
            {/*    onClick={logout}*/}
            {/*    className="btn btn-primary">*/}
            {/*    Logout*/}
            {/*</button>*/}
        </div>
    )
}

export default Profile;