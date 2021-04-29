import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
import userService from '../services/user-service'
import "./details-screen-style.css"
import userStatus from "../components/users/userConstructor";
import GuideCard from "./guides/guide-card";
const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";



const DetailsScreen = () => {
    const [poiInfo, setPoiInfo] = useState({address: '', poiID: '', location: '', imageURL: '', username: ''})
    const [saved, setSaved] = useState(false)
    const {searchLocation, location, poiID, photoReference} = useParams()
    const history = useHistory()
    const [place, setPlace] = useState({})
    const [guides, setGuides] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        console.log("Details-screen")
        findPlaceByPoiID()
        findLocalsByLocation()
        userService.profile()
            .then((user) => {
                setUser(user)
            })
        checkSavedMarket();
        console.log("Save Status_useEFFECT: "+saved)
    }, [])

        const checkSavedMarket = () => {
            console.log("Save Status_1: "+saved)
            userService.checkFavouritePlace(poiID)
                .then((res) => {
                    console.log("ret from checkSavedMarket: "+res)
                    if (res != null && res !== 0) {
                        setSaved(true)
                    } else {
                        setSaved(false)
                    }
                })
            console.log("Save Status_2: "+saved)
        }
        const findPlaceByPoiID = () => {
            console.log("findPlaceByPoiID")
            poiService.findPlaceByPoiID(poiID)
                .then((data) => {
                    setPlace(data)
                })
        }

        const findLocalsByLocation = () => {
            console.log("Search locals in " + searchLocation)
            userService.findGuidesByLocation(searchLocation)
                .then((local) => {
                    setGuides(local)
                    console.log("Locals Returned from API " + JSON.stringify(local))
                })
        }


        const checkPOIForTraveler = () =>{
            if (!saved){
                console.log("Save POI To DB")
                setPoiInfo({
                    location: location,
                    poiID: poiID,
                    address: place.result && place.result.formatted_address,
                    imageURL: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`,
                    username: user.username})
                poiService.SavePOIForTraveler(poiInfo)
                    .then((result) => {
                        console.log("ret from save: "+result)
                    })
                console.log("Save Status_4: "+saved)
                checkSavedMarket();
                console.log("Save Status_5: "+saved)
            }else{
                console.log("Save Status_6: "+saved)
                userService.deleteFavouritePlace(poiID).then(r => {
                    console.log("ret from delete " + r)
                });
                console.log("Save Status_7: "+saved)
                checkSavedMarket();
                console.log("Save Status_8: "+saved)
            }
        }
                return(
                <div className="detail-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Link to="../../../../">
                                    <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                                </Link>

                                <br/>
                            </div>
                            <div className="col-6 mt-2">
                                {
                                    !user.username &&
                                    <Link to="../../../../login">
                                        <button type="button" className="btn btn-secondary float-right">Login</button>
                                    </Link>
                                }
                                {
                                    user.username &&
                                    <Link to="../../../../profile">
                                        <button type="button" className="btn btn-secondary float-right">Profile</button>
                                    </Link>
                                }
                                <Link >
                                    <button onClick={() => history.goBack()} type="button" className="btn btn-light float-right">Back</button>
                                </Link>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-10 col-sm-11 detail-title-location" id="local_name">
                                <h3>{location}</h3>
                                <br/>
                            </div>

                            <div className="col-2 col-sm-1 float-right">
                                <i onClick={() => checkPOIForTraveler()} role={"btn"}
                                   className={`detail-back-btn ${saved?
                                       'fas fa-star fa-2x' : 'far fa-star fa-2x'}`}></i>
                            </div>
                        </div>
                        {/*<div className="col-1">*/}
                        {/*    <i onClick={() => history.goBack()} role={"btn"}*/}
                        {/*       className="detail-back-btn fas fa-times fa-2x "></i>*/}
                        {/*</div>*/}

                        {/*<div className="col">*/}
                        {/*        <p className={"detail-back-btn"}>Welcome {userStatus.getName()}</p>*/}
                        {/*</div>*/}

                        {/*<div className="col-2 fav_icon">*/}
                        {/*    {console.log("before onClick")}*/}
                        {/*    <i onClick={() => {*/}
                        {/*        console.log("in onClick" + saved)*/}
                        {/*        SavePOIForTraveler();*/}
                        {/*        setSaved(true)}*/}
                        {/*    } role={"btn"}*/}
                        {/*       className={`detail-back-btn ${saved ?*/}
                        {/*           'fas fa-star fa-2x' : 'far fa-star fa-2x'}`}></i>*/}
                        {/*</div>*/}
                        {/*</div>*/}

                        <div className="col-sm-6 float-right d-none d-sm-block">
                            <img id="detail_img"
                                 src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`}
                                 width="550" height="300"/>
                            <br/>
                            {/*put save star here so that it will work*/}
                        </div>


                        <div className="col-sm-6 detail-text">
                            <p id= "detail_content" >Weekday Hours: </p>
                            <ul>
                                {
                                    place.result && place.result.opening_hours &&
                                    place.result.opening_hours.weekday_text.map((el) =>
                                        <li className="d-block d-inlines" id="hour" >
                                            {el}
                                        </li>)
                                }

                                {
                                    place.result && !place.result.opening_hours &&
                                    <div id="hour_unavailable">
                                        Currently Unavailable
                                    </div>
                                }

                            </ul>

                            {/*doesnt have a value yet, render before, first time*/}
                            <p id="address">Address: {place.result && place.result.formatted_address}</p>
                            {
                                guides.length > 0 &&
                                <div className="col-4">
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        {
                                            guides.map(guide =>
                                                <GuideCard guide={guide}/> )
                                        }
                                    </div>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                )
    }
export default DetailsScreen