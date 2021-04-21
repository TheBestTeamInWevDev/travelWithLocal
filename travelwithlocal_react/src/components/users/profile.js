import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import userConstructor from "./userConstructor";

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
        // nav back to home
        setCurrentUser({username: '', password: ''})
        userService.logout().
        then()
        history.push("/")
    }
    return(
        <div>
            <h1>Profile</h1>
            {JSON.stringify(currentUser)}
            <h3>Welcome {currentUser.username}</h3>
            <button
                onClick={logout}
                className="btn btn-primary">
                Logout
            </button>
        </div>
    )
}

export default Profile;