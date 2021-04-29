import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import userService from '../../services/user-service'
import "../users/profile-screen-style.css"
import userConstructor from "../users/userConstructor";

const PublicProfile = () => {
    const {username} = useParams()
    const [guide, setGuide] = useState({})
    const [credentials, setCredentials] = useState({})
    useEffect(() => {
        console.log("Find Guide Profile: "+username)

        userService.findPublicProfile(username)
            .then((guideRES) => {
                setGuide(guideRES)
            })
        userService.profile()
            .then((credentials) => {
                setCredentials(credentials)
            })
        console.log("Find Guide Profile:"+ JSON.stringify(guide) + guide.username)
    }, [])


    const request = () => {
        let username = credentials.username
        let guidename = guide.username
        console.log("User:"+ username + "send request to "+ guidename)
        userService.requestGuide(username, guidename)
            .then((result) => {
                if (result === "1" || result === 1){
                    window.alert("Successfully send the request to local guide" + result)
                }else{
                    window.alert("Oops, something is wrong " + result)
                }
            })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                        <br/>
                    </div>
                </div>

                <div className="col-6 mt-2">
                    <Link to="../../../../">
                        <button type="button" className="btn btn-secondary float-right">Home</button>
                    </Link>
                    <Link to="./">
                        <button type="button" className="btn btn-light float-right">Back</button>
                    </Link>
                </div>
            </div>

            {credentials.role !== "LOCALGUIDE" &&
            <h3 className="welcome_back">Make a Request, Making a Friend</h3>

            }

            {credentials.role === "LOCALGUIDE" &&
            <h3 className="welcome_back">Welcome back!</h3>

            }

            <br/>


            <div className="form-group row">
                <div className="col-sm-6">
                    <div className="mb-3 row form-group">
                        <label htmlFor="staticEmail"
                               className="col-sm-2 col-form-label wbdv-profile-font">
                            Username
                        </label>
                        <div className="col-sm-10 ">
                            <input type="text"
                                   readOnly
                                   className="form-control-2 wbdv-profile-input"
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
                                   className="form-control-2"
                                   value={guide.email}/>
                        </div>
                    </div>

                    {   credentials.role !== "LOCALGUIDE" &&
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10 ">
                            <a className="signup_btn btn wbdv-btn-update"
                               onClick={request}
                               role="button">
                                Request
                            </a>
                        </div>
                    </div>
                    }
                </div>

                <div className="col-sm-6">
                    <img src="https://i.ibb.co/MSxd51q/fef73becd50c4ae25bad641cd54c55cb.jpg"  alt="profile photo"
                         width="500" height="600"/>
                </div>
            </div>






                {/*<div className="mb-3 row">*/}
                {/*    <label htmlFor="email"*/}
                {/*           className="col-sm-2 col-form-label wbdv-profile-font">*/}
                {/*        Guide Username*/}
                {/*    </label>*/}
                {/*    <div className="col-sm-10">*/}
                {/*        <input type="email"*/}
                {/*               readOnly*/}
                {/*               className="form-control wbdv-profile-input"*/}
                {/*               value={guide.username}/>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div className="mb-3 row">*/}
                {/*    <label htmlFor="email"*/}
                {/*           className="col-sm-2 col-form-label wbdv-profile-font">*/}
                {/*        Email*/}
                {/*    </label>*/}
                {/*    <div className="col-sm-10">*/}
                {/*        <input type="email"*/}
                {/*               readOnly*/}
                {/*               className="form-control wbdv-profile-input"*/}
                {/*               value={guide.email}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*{   credentials.role !== "LOCALGUIDE" &&*/}
                {/*    <div className="mb-3 row">*/}
                {/*        <label className="col-sm-2 col-form-label"></label>*/}
                {/*        <div className="col-sm-10">*/}
                {/*            <a className="btn btn-primary btn-block"*/}
                {/*               onClick={request}*/}
                {/*               role="button">*/}
                {/*                Request*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*}*/}


        </div>
    )
}

export default PublicProfile;