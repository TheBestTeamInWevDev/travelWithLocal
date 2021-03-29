import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom"
import poiService from "../services/poi-service"

const SearchScreen = () => {
    const history = useHistory()
    const {location} = useParams()
    const [searchLocation, setSearchLocation] = useState(location)
    const [results, setResults] = useState({results:[]})
    useEffect(() => {
        setSearchLocation(location)
        findPOIByLocation(location)
    }, [])
    const findPOIByLocation = (location) => {
        // history.push(location)
        // history.push(`/search/${searchTitle}`)
        poiService.findPOIByLocation(location)
            .then((results) => {
                setResults(results)
            })
    }

    return(
        <div>
            <h2>Search Screen</h2>
            <input value={searchLocation}
                   onChange={(event) => {
                        setSearchLocation(event.target.value)
                    }}
                    className="form-control"/>
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
                                <Link to={`/details/${poi.reference}`}>
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