import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import poiService from "../services/poi-service"

const SearchScreen = () => {
    const {location} = useParams()
    const [results, setResults] = useState({results:[]})
    useEffect(() => {
        findPOIByLocation()
    }, [])
    const findPOIByLocation = () => {
        poiService.findPOIByLocation(location)
            .then((results) => {
                setResults(results)
                console.log(results);
            })
    }

    return(
        <div>
            <h2>Search Screen</h2>
            <input value={location} className="form-control"/>
            <button className="btn btn-primary">
                Search
            </button>
            <ul className="list-group">
                {

                    results.results.map((poi) =>{
                        return(
                            <li className="list-group-item">
                                <Link to={`/details/Boston`}>
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