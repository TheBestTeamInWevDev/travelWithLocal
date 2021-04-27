import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
import userService from '../services/user-service'
import "./details-screen-style.css"
import userStatus from "../components/users/userConstructor";
import GuideCard from "./guides/guide-card";
const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";



const DetailsScreen = () => {
    const [poiInfo, setPoiInfo] = useState({name: '', poiID: '', location: '', imageURL: '', username: ''})
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
        userService.checkFavouritePlace(poiID)
            .then((saved) => {
                console.log("Favourite Place saved? " + saved)
                if (saved === "1") {
                    setSaved(true)
                } else {
                    setSaved(false)
                }
                userService.profile()
                    .then((user) => {
                        setUser(user)
                    })
            }, [])
    })

        const checkSavedMarket = () => {
            userService.checkFavouritePlace(poiID)
                .then((saved) => {
                    if (saved === "1") {
                        setSaved(true)
                    } else {
                        setSaved(false)
                    }
                })
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
        const SavePOIForTraveler = () => {
            console.log("Save POI To DB")
            setPoiInfo({
                location: location,
                poiID: poiID,
                address: place.result.formatted_address,
                imageURL: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`,
                username: user.username
            })
            poiService.SavePOIForTraveler(poiInfo)
                .then()
        }

        return (
            <div className="detail-body">
                <div className="container">
                    {/*<div className="row">*/}
                    <div>
                        <Link to="../../../">
                            <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"/>
                        </Link>

                        <br/>
                    </div>

                    <div className="d-none d-lg-block">
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
                        <Link>
                            <button onClick={() => history.goBack()} type="button"
                                    className="btn btn-light float-right">Back
                            </button>
                        </Link>
                    </div>

                    {/*<div className="col-1">*/}
                    {/*    <i onClick={() => history.goBack()} role={"btn"}*/}
                    {/*       className="detail-back-btn fas fa-times fa-2x "></i>*/}
                    {/*</div>*/}
                    <div className="col-6 detail-title-location" id="local_name">
                        <h3>{location}</h3>
                    </div>
                    <div className="col-2 fav_icon">
                        <i onClick={() => {
                            SavePOIForTraveler();
                            checkSavedMarket()
                        }} role={"btn"}

                           className={`detail-back-btn ${saved ?
                               'fas fa-star fa-2x' : 'far fa-star fa-2x'}`}></i>
                    </div>
                    {/*</div>*/}
                </div>
                <div className="wbdv-header-top col-sm-6">

                    <img id="detail_img"
                         src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`}
                         width="550" height="300"
                    />
                    <br/>

                    <p id="detail_content" className="detail-text">Weekday Hours: </p>
                    <ul id="hours">

                        {place.result && place.result.opening_hours && place.result.opening_hours.weekday_text.map((el) =>
                            <li id="hour" className={"detail-text"}>{el}</li>)}

                        {place.result && !place.result.opening_hours &&
                        <div id="hour_unavailable" className={"detail-text"}>Currently Unavailable</div>}

                    </ul>

                    {/*doesnt have a value yet, render before, first time*/}
                    <p id="unavailable"
                       className={"detail-text"}>Address: {place.result && place.result.formatted_address}</p>
                    {
                        guides.length > 0 &&
                        <div className="col-4">
                            <div className="row">
                            </div>
                            <div className="row">
                                {
                                    guides.map(guide =>
                                        <GuideCard guide={guide}/>)
                                }
                            </div>
                        </div>
                    }

                </div>

            </div>

        )
    }

export default DetailsScreen