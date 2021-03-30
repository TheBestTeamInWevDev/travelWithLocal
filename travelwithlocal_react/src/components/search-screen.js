import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import poiService from "../services/poi-service"

const SearchScreen = () => {
    const {location} = useParams()
    const [searchLocation, setSearchLocation] = useState(location)
    const [results, setResults] = useState({results:[]})
    useEffect(() => {
        setSearchLocation(location)
        findPOIByLocation(location)
    }, [])
    const findPOIByLocation = (location) => {
        poiService.findPOIByLocation(location)
            .then((results) => {
                setResults(results)
                // console.log(results);
            })
    }

    return(
        <div>
            <h2>Search Screen</h2>
            <input onChange={(event => {
                setSearchLocation(event.target.value)
            })}
                   value={searchLocation} className="form-control"/>
            <button onClick={() => {
                findPOIByLocation(searchLocation)
            }} className="btn btn-primary">
                Search
            </button>
            <ul className="list-group">
                {

                    results.results.map((poi) =>{
                        return(
                            <li className="list-group-item">
                                {/*poi.place_id does not work*/}
                                {JSON.stringify(poi.photos)}
                                <Link to={`/details/${poi.reference}`}>
                                    {/*/${poi.photos[0].photo_reference}*/}
                                    {/*.map((photo) => {return(photo.photo_reference)})*/}
                                    {poi.name}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default SearchScreen