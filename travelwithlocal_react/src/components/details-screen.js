import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
import "./details-screen-style.css"
import userStatus from "../components/users/userConstructor";
const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";


const DetailsScreen = () => {

    // console.log("This is detail screen")
    const {location, poiID, photoReference} = useParams()
    // console.log(location)
    // console.log(poiID)
    // console.log(photoReference)

    const history = useHistory()
    const [place, setPlace] = useState({})
    // const [photo, setPhoto] = useState({})

    useEffect(() => {
        findPlaceByPoiID()
    }, [])
    // useEffect(() => {
    //     findPhotoByPhotoReference()
    // }, [])

    const findPlaceByPoiID = () => {
        poiService.findPlaceByPoiID(poiID)
            .then((data) => {
                setPlace(data)
            })
    }


    // console.log("Detailed Page")
    // const weekday = place.result && place.result.opening_hours.weekday_text;

    // const weekday = [
    //     "Monday: 5:00 AM – 11:00 PM",
    //     "Tuesday: 5:00 AM – 11:00 PM",
    //     "Wednesday: 5:00 AM – 11:00 PM",
    //     "Thursday: 5:00 AM – 11:00 PM",
    //     "Friday: 5:00 AM – 11:00 PM",
    //     "Saturday: 5:00 AM – 11:00 PM",
    //     "Sunday: 5:00 AM – 11:00 PM"
    // ]
    //
    // console.log(weekday)
    // const findPhotoByPhotoReference = () => {
    //     poiService.findPhotoByPhotoReference(photoReference)
    //         .then((ref) => {
    //             setPhoto(ref)
    //             console.log(ref)
    //         })
    // }

    return(
        <div className={"detail-body"}>
            <div className="wbdv-sticky-top">
                <div className="row">
                    <div className="col-1">
                        <i onClick={() => history.goBack()} role={"btn"}
                           className="detail-back-btn fas fa-times fa-2x "></i>
                    </div>
                    <div className="col-3 detail-title-location">
                        {location}
                    </div>
                    <div className="col">
                            <p className={"detail-back-btn"}>Welcome {userStatus.getName()}</p>
                    </div>
                    <div className="col-1">
                        <i onClick={() => history.goBack()} role={"btn"}
                           className="detail-back-btn far fa-star fa-2x "></i>
                    </div>
                </div>
            </div>
            <div className={"wbdv-header-top"}>

                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`}/>
                <br/>
                <p className={"detail-text"}>Weekday Hours: </p>
                <ul>
                    {place.result && place.result.opening_hours && place.result.opening_hours.weekday_text.map((el) => <li className={"detail-text"}>{el}</li> )}
                    {place.result && !place.result.opening_hours && <div className={"detail-text"}>Currently Unavailable</div>}
                    {/*<li className={"detail-text"}>{place.result && place.result.opening_hours.weekday_text.split(',')}</li>*/}
                </ul>

                {/*<h2 className={"detail-header"}>{location}</h2>*/}

                {/*<p>{JSON.stringify(place.result)}</p>*/}
                {/*<h1>{photoReference}</h1>*/}
                {/*doesnt have a value yet, render before, first time*/}
                <p className={"detail-text"}>Location: {place.result && place.result.formatted_address}</p>
                {/*<p>{place.result.photos}</p>*/}

            </div>

        </div>

    )
}

export default DetailsScreen