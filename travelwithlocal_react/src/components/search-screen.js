import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom"
import poiService from "../services/poi-service"
import "./search-screen-style.css"

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
        history.push(`/search/${searchLocation}`)
        poiService.findPOIByLocation(location)
            .then((results) => {
                setResults(results)
            })
    }

    return(
        <div>

            <div className="wbdv-sticky-top">
                <div className="row" >
                    <div className="col">
                        <i className="fas fa-bars fa-2x wbdv-nav-hbg-logo"></i>
                    </div>
                    <div className="col-2 d-none d-lg-block wbdv-nav-title">
                        Travel Buddy
                    </div>
                    <div className="col-8">
                        <input value={searchLocation}
                               onChange={(event) => {
                                   setSearchLocation(event.target.value)
                               }}
                               className="form-control"/>
                    </div>
                    <div className="col-1">
                        {/*<button onClick={() => {findPOIByLocation(searchLocation)}} className="fas fa-search fa-2x wbdv-nav-plus-logo">*/}
                            <a onClick={() => {findPOIByLocation(searchLocation)}} className="fas fa-search fa-2x search-logo" role="button" ></a>
                        {/*</button>*/}
                    </div>

                </div>
            </div>

            {/*<input value={searchLocation}*/}
            {/*       onChange={(event) => {*/}
            {/*           setSearchLocation(event.target.value)*/}
            {/*       }}*/}
            {/*       className="form-control"/>*/}
            {/*<button onClick={() => {*/}
            {/*    findPOIByLocation(searchLocation)*/}
            {/*}} className="btn btn-primary">*/}
            {/*    <a className="fas fa-search fa-2x wbdv-nav-plus-logo" role="button" ></a>*/}
            {/*</button>*/}
            <div className={"wbdv-header-top"}>
            <ul className=" list-group">
                {

                    results.results.map((poi, idx) =>{
                        return(
                            <li className="list-group-item" key={idx}>
                                {/*poi.place_id does not work*/}
                                {/*{JSON.stringify(poi.photos)}*/}
                                {/*react: if map, give child key!!*/}
                                <Link to={`/details/${poi.name}/${poi.reference}/${poi.photos[0].photo_reference}`}>
                                    <i className={"search-result-text"}>{poi.name}</i>
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
            </div>
        </div>
    )
}

export default SearchScreen
