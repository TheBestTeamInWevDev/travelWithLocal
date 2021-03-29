import React,{useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import poiService from '../services/poi-service'
const DetailsScreen = () => {
    const {poiID} = useParams()
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
    return(
        <div>
            <button className="btn btn-primary" onClick={() => history.goBack()}>
                Back
            </button>
            <h2>
                {/*{JSON.stringify(place)}*/}
            {place.result.name}
            </h2>
            <p>{place.result.formatted_address}</p>
            {/*<p>{place.photos}</p>*/}

        </div>
    )
}

export default DetailsScreen