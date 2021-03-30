import React,{useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
const DetailsScreen = () => {
    const {poiID, photoReference} = useParams()
    const history = useHistory()
    const [place, setPlace] = useState({})
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        findPlaceByPoiID()
    }, [])
    useEffect(() => {
        findPhotoByPhotoReference()
    }, [])

    const findPlaceByPoiID = () => {
        poiService.findPlaceByPoiID(poiID)
            .then((data) => {
                setPlace(data)
            })
    }
    const findPhotoByPhotoReference = () => {
        poiService.findPhotoByPhotoReference(photoReference)
            .then((ref) => {
                setPhoto(ref)
                console.log(ref)
            })
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={() => history.goBack()}>
                Back
            </button>
            <h2>

            {/*{place.result.name}*/}
            </h2>
            <p>  {JSON.stringify(place)}</p>
            <img src={photo} />
            {/*<p>{place.result.formatted_address}</p>*/}
            {/*<p>{place.photos}</p>*/}

        </div>

    )
}

export default DetailsScreen