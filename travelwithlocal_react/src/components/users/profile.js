import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";
import "./profile-screen-style.css"

const Profile = () => {
    const [credentials, setCredentials] = useState({username: '', password: '', email: '', role: 'TRAVELLER'})
    // const [currentUser, setCurrentUser] = useState({username: '', password: ''})
    useEffect(() => {
        // userService.profile()
        //     .then((currentUser) => {
        //         setCurrentUser(currentUser)
        //     })
        userService.profile()
            .then((credentials) => {
                setCredentials(credentials)
            })
    }, [])

    const history = useHistory()
    const logout = () => {
        userConstructor.setName("")
        userConstructor.setUserStatus(0)
        userConstructor.setUserType("")
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
                userConstructor.setName(credentials.username)
                userConstructor.setUserStatus(1)
                userConstructor.setUserType(credentials.role)
                // setCurrentUser(credentials)
                setCredentials(credentials)
                history.push("/profile")
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
                <Link to="./search">
                    <button type="button" className="btn btn-light float-right">Search</button>
                </Link>
            </div>

            <h3 id="creat_account">
                My profile
            </h3>
            <br/>

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
                                   className="form-control wbdv-profile-input"
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
                                className="form-control wbdv-profile-input"
                                onChange={(e) =>
                                {setCredentials({...credentials, password: e.target.value})}}
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
                                   onChange={(e) =>
                                   {setCredentials({...credentials, email: e.target.value})}}
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
                                className="form-control wbdv-profile-input"
                                value={credentials.role}
                            />
                            {/*<select */}
                            {/*    onChange={(e) =>*/}
                            {/*{setCredentials({...credentials, role: e.target.value})}}*/}
                            {/*        // placeholder={credentials.role}*/}
                            {/*        value={credentials.role}*/}
                            {/*        className="form-control wbdv-profile-input">*/}
                            {/*    <option value={"TRAVELLER"}>Traveller</option>*/}
                            {/*    <option value={"LOCALGUIDE"}>Local Guide</option>*/}
                            {/*</select>*/}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="email"
                               className="col-sm-2 col-form-label wbdv-profile-font">
                            Favourite Places
                        </label>
                        <div className="col-sm-10">

                            <ul>
                                {credentials.favoritePlaces && credentials.favoritePlaces.map((el) => <li className={"wbdv-profile-input"}>{el.location}</li> )}
                                {!credentials.favoritePlaces && <div className={"wbdv-profile-input"}>Currently Unavailable</div>}
                            </ul>
                        </div>
                    </div>
                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="role">*/}
                    {/*        <i className="left_icon fas fa-smile-wink"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*    <select onChange={(e) =>*/}
                    {/*    {setCredentials({...credentials, role: e.target.value})}}*/}
                    {/*            placeholder={credentials.role}*/}
                    {/*            value={currentUser.role}*/}
                    {/*            className="form-control wbdv-profile-input">*/}
                    {/*        <option value={"TRAVELLER"}>Traveller</option>*/}
                    {/*        <option value={"LOCALGUIDE"}>Local Guide</option>*/}
                    {/*    </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="gender">*/}
                    {/*        <i className="left_icon fas fa-users"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <input id="gender" className="form-control-2"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="username">*/}
                    {/*        <i className="left_icon fas fa-user"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <input type="text"*/}
                    {/*               readOnly*/}
                    {/*               placeholder={currentUser.username}*/}
                    {/*               value={credentials.username}*/}
                    {/*               className="form-control-2"*/}
                    {/*               id="username"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="email" >*/}
                    {/*        <i className=" left_icon fas fa-envelope"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <input type="text"*/}
{/*                               onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                               placeholder={currentUser.email}
                               value={credentials.email}
                               className="form-control-2"
                               placeholder="email"*/}
                    {/*           id="email"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="password"*/}
                    {/*           className="col-sm-2 col-form-label wbdv-profile-font">*/}
                    {/*        password*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <input*/}
                    {/*            // type="password"*/}
                    {/*               className="form-control wbdv-profile-input"*/}
                    {/*               onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}*/}
                    {/*               placeholder={currentUser.password}*/}
                    {/*               value={credentials.password}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="email" >*/}
                    {/*        <i className="left_icon fas fa-heart"></i>*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}

                    {/*        <input type="text"*/}
                    {/*               className="form-control-2"*/}
                    {/*               placeholder="favorite place"*/}
                    {/*               id="favorite place"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-block wbdv-btn-update"
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

        </div>



        // <div className={"wbdv-profile-body"}>
        //     <div className="row">
        //         <div className="col-8 col-md-10">
        //             <h1>Profile</h1>
        //         </div>
        //         <div className="col-4 col-md-2 float-right">
        //             <Link to="/">
        //                 <a className="btn btn-block btn-primary">
        //                     Home
        //                 </a>
        //             </Link>
        //         </div>
        //     </div>
        //
        //
        //
        //     {/*{JSON.stringify(currentUser)}*/}
        //     {/*<h3>Welcome {currentUser.username}</h3>*/}
        //     <div className="container">
        //         <div className="mb-3 row">
        //             <label htmlFor="staticEmail"
        //                    className="col-sm-2 col-form-label wbdv-profile-font">
        //                 Username
        //             </label>
        //             <div className="col-sm-10 ">
        //                 <input type="text"
        //                        readOnly
        //                        className="form-control wbdv-profile-input"
        //                        id="staticEmail"
        //                        value={currentUser.username}/>
        //             </div>
        //         </div>
        //
        //         <div className="mb-3 row">
        //             <label htmlFor="password"
        //                    className="col-sm-2 col-form-label wbdv-profile-font">
        //                 password
        //             </label>
        //             <div className="col-sm-10">
        //                 <input type="password"
        //                        className="form-control wbdv-profile-input"
        //                        value={currentUser.password}/>
        //             </div>
        //         </div>
        //
        //         <div className="mb-3 row">
        //             <label htmlFor="email"
        //                    className="col-sm-2 col-form-label wbdv-profile-font">
        //                 Email
        //             </label>
        //             <div className="col-sm-10">
        //                 <input type="email"
        //                        className="form-control wbdv-profile-input"
        //                        value={currentUser.email}/>
        //             </div>
        //         </div>
        //
        //         <div className="mb-3 row">
        //             <label htmlFor="email"
        //                    className="col-sm-2 col-form-label wbdv-profile-font">
        //                 User Type
        //             </label>
        //             <div className="col-sm-10">
        //                 <input type="email"
        //                        className="form-control wbdv-profile-input"
        //                        value={currentUser.role}/>
        //             </div>
        //         </div>
        //
        //         <div className="mb-3 row">
        //             <label htmlFor="email"
        //                    className="col-sm-2 col-form-label wbdv-profile-font">
        //                 Favourite Places
        //             </label>
        //             <div className="col-sm-10">
        //
        //                 <ul>
        //                     {currentUser.favoritePlaces && currentUser.favoritePlaces.map((el) => <li className={"wbdv-profile-input"}>{el.location}</li> )}
        //                     {!currentUser.favoritePlaces && <div className={"wbdv-profile-input"}>Currently Unavailable</div>}
        //                 </ul>
        //             </div>
        //         </div>
        //
        //
        //         <div className="mb-3 row">
        //             <label className="col-sm-2 col-form-label"></label>
        //             <div className="col-sm-10">
        //                 <a className="btn btn-block wbdv-btn-update"
        //                    href="#"
        //                    role="button">
        //                     Update
        //                 </a>
        //             </div>
        //         </div>
        //
        //
        //         <div className="mb-3 row">
        //             <label className="col-sm-2 col-form-label"></label>
        //             <div className="col-sm-10">
        //                 <a className="btn btn-danger btn-block"
        //                    onClick={logout}
        //                    role="button">
        //                     Logout
        //                 </a>
        //             </div>
        //         </div>
        //
        //     </div>
        //     {/*<button*/}
        //     {/*    onClick={logout}*/}
        //     {/*    className="btn btn-primary">*/}
        //     {/*    Logout*/}
        //     {/*</button>*/}
        // </div>
    )
}

export default Profile;
