import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
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
    // const findPhotoByPhotoReference = () => {
    //     poiService.findPhotoByPhotoReference(photoReference)
    //         .then((ref) => {
    //             setPhoto(ref)
    //             console.log(ref)
    //         })
    // }

    return(
        <div>
            <button className="btn btn-primary" onClick={() => history.goBack()}>
                Back
            </button>

            <h2>{location}</h2>
            {/*<p>{JSON.stringify(place.result)}</p>*/}
            {/*<h1>{photoReference}</h1>*/}
            {/*doesnt have a value yet, render before, first time*/}
            <p>Location: {place.result && place.result.formatted_address}</p>
            {/*<p>{place.result.photos}</p>*/}
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`}/>


        </div>

    )
}

export default DetailsScreen