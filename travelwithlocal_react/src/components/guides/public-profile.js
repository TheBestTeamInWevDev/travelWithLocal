import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import userService from '../../services/user-service'
import "../users/profile-screen-style.css"
import userConstructor from "../users/userConstructor";

const PublicProfile = () => {
    const {username} = useParams()
    const [guide, setGuide] = useState({})
    useEffect(() => {
        console.log("Find Guide Profile: "+username)

        userService.findPublicProfile(username)
            .then((guideRES) => {
                setGuide(guideRES)
            })
        console.log("Find Guide Profile:"+ JSON.stringify(guide) + guide.username)
    }, [])


    const request = () => {
        let username = userConstructor.getName()
        let guidename = guide.username
        console.log("User:"+ username + "send request to "+ guidename)
        userService.requestGuide(username, guidename)
            .then(() => {
            })
    }

    return(
        <div className={"wbdv-profile-body"}>


            <div className="row mb-5">
                <div className="col-8 col-md-10">
                </div>
                <div className="col-4 col-md-2 float-right">
                    <Link to="/">
                        <a className="btn btn-block btn-primary">
                            Home
                        </a>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Guide Username
                    </label>
                    <div className="col-sm-10">
                        <input type="email"
                               readOnly
                               className="form-control wbdv-profile-input"
                               value={guide.username}/>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email"
                               readOnly
                               className="form-control wbdv-profile-input"
                               value={guide.email}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary btn-block"
                           onClick={request}
                           role="button">
                            Request
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PublicProfile;