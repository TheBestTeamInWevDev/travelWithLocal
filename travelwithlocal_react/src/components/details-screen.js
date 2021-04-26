import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
import "./details-screen-style.css"
import userStatus from "../components/users/userConstructor";
const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";


const DetailsScreen = () => {
    const [poiInfo, setPoiInfo] = useState({name: '', poiID: '', location: '', imageURL: '', username: ''})
    const [saved, setSaved] = useState(false)
    const {location, poiID, photoReference} = useParams()
    const history = useHistory()
    const [place, setPlace] = useState({})

    useEffect(() => {
        findPlaceByPoiID()
    }, [])

    const findPlaceByPoiID = () => {
        poiService.findPlaceByPoiID(poiID)
            .then((data) => {
                setPlace(data)
            })
    }

    const SavePOIForTraveler = () =>{
        console.log("Save POI To DB")
        setPoiInfo({
            location: location,
            poiID: poiID,
            address: place.result.formatted_address,
            imageURL: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`,
            username: userStatus.getName()})
        poiService.SavePOIForTraveler(poiInfo)
            .then()
    }


    return(
        <div className="detail-body">
            <div className="container">
                {/*<div className="row">*/}
                    <div>
                        <Link to="../../../">
                        <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                        </Link>

                        <br/>
                    </div>

                    <div className="d-none d-lg-block">
                        <Link to="../../../login">
                            <button type="button" className="btn btn-secondary float-right">Login</button>
                        </Link>
                        <Link >
                            <button onClick={() => history.goBack()} type="button" className="btn btn-light float-right">Back</button>
                        </Link>
                    </div>

                    {/*<div className="col-1">*/}
                    {/*    <i onClick={() => history.goBack()} role={"btn"}*/}
                    {/*       className="detail-back-btn fas fa-times fa-2x "></i>*/}
                    {/*</div>*/}
                    <div className="col-6 detail-title-location" id="local_name">
                        <h3>{location}</h3>
                    </div>
                    {/*<div className="col">*/}
                    {/*        <p className={"detail-back-btn"}>Welcome {userStatus.getName()}</p>*/}
                    {/*</div>*/}
                    <div className="col-2 fav_icon">
                        <i onClick={() => {SavePOIForTraveler();setSaved(true)}} role={"btn"}
                           className={`detail-back-btn ${saved?
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

                <p id= "detail_content"className="detail-text">Weekday Hours: </p>
                <ul id="hours" >

                    {place.result && place.result.opening_hours && place.result.opening_hours.weekday_text.map((el) => <li id="hour" className={"detail-text"}>{el}</li> )}

                    {place.result && !place.result.opening_hours && <div id="hour_unavailable" className={"detail-text"}>Currently Unavailable</div>}

                    {/*{place.result && !place.result.opening_hours && <div className={"detail-text"}>Currently Unavailable</div>}*/}
                    {/*<li className={"detail-text"}>{place.result && place.result.opening_hours.weekday_text.split(',')}</li>*/}
                </ul>

                {/*<h2 className={"detail-header"}>{location}</h2>*/}

                {/*<p>{JSON.stringify(place.result)}</p>*/}
                {/*<h1>{photoReference}</h1>*/}
                {/*doesnt have a value yet, render before, first time*/}
                <p id="unavailable" className={"detail-text"}>Address: {place.result && place.result.formatted_address}</p>
                {/*<p>{place.result.photos}</p>*/}

                {/*<img id="bg_img" src="https://i.ibb.co/PWMSWF8/pexels-miguel-padri-n-255379.jpg" alt="pexels-miguel-padri-n-255379" border="0"/>*/}
            </div>

        </div>

    )
}

export default DetailsScreen