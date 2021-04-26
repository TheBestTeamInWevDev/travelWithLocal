import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./profile-screen-style.css"

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({username: '', password: ''})
    const [credentials, setCredentials] = useState({username: '', password: '', email: '', role: 'TRAVELLER'})

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

    // find user, update all attributes
    const update = () => {
        userService.update(credentials)
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
/*
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
 */
    return(
        <div className={"wbdv-profile-body"}>
            <div className="row">
                <div className="col-8 col-md-10">
                    <h1>Profile</h1>
                </div>
                <div className="col-4 col-md-2 float-right">
                    <Link to="/">
                        <a className="btn btn-block btn-primary">
                            Home
                        </a>
                    </Link>
                </div>
            </div>



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
                               onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                               placeholder={currentUser.password}
                               value={credentials.username}
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
                               className="form-control wbdv-profile-input"
                               onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                               placeholder={currentUser.email}
                               value={credentials.email}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        User Type
                    </label>

                    <div className="col-sm-10">
                        {/*<input type="email"*/}
                        {/*       className="form-control wbdv-profile-input"*/}
                        {/*       onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}*/}
                        {/*       value={currentUser.role}/>*/}
                        <select onChange={(e) =>
                        {setCredentials({...credentials, role: e.target.value})}}
                                placeholder={credentials.role}
                                value={credentials.role}
                                className="form-control wbdv-profile-input">
                            <option value={"TRAVELLER"}>Traveller</option>
                            <option value={"LOCALGUIDE"}>Local Guide</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Favourite Places
                    </label>
                    <div className="col-sm-10">

                        <ul>
                            {currentUser.favoritePlaces &&
                            currentUser.favoritePlaces.map((el) =>
                                <li className={"wbdv-profile-input"}>{el.location}</li> )}
                            {!currentUser.favoritePlaces &&
                            <div className={"wbdv-profile-input"}>
                                Currently Unavailable</div>}
                        </ul>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-block wbdv-btn-update"
                           // href="#"
                           onClick={update}
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