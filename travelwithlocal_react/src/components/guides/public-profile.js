import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import userService from '../../services/user-service'
import "../users/profile-screen-style.css"

const PublicProfile = () => {
    const userID = useParams()
    const [guide, setGuide] = useState({})
    useEffect(() => {
        userService.findUserByUsername(userID)
            .then((guide) => {
                setGuide(guide)
            })
    })
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
                    <label htmlFor="staticEmail"
                           className="col-sm-2 col-form-label wbdv-profile-font">
                        Username
                    </label>
                    <div className="col-sm-10 ">
                        <input type="text"
                               readOnly
                               className="form-control wbdv-profile-input"
                               id="staticEmail"
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


            </div>
        </div>
    )
}

export default PublicProfile;