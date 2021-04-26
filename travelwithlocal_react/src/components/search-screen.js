import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom"
import poiService from "../services/poi-service"
import userService from "../services/user-service"
import "./search-screen-style.css"
import user from "../components/users/userConstructor"
import GuideCard from "./guides/guide-card";

const SearchScreen = () => {
    const history = useHistory()
    const {location} = useParams()
    const [searchLocation, setSearchLocation] = useState(location)
    const [results, setResults] = useState({results:[]})
    const [guides, setGuides] = useState([])
    useEffect(() => {
        setSearchLocation(location)
        findPOIByLocation(location)
        findGuidesByLocation(location)
    }, [])
    const findPOIByLocation = (location) => {
        // history.push(location)
        history.push(`/search/${searchLocation}`)
        poiService.findPOIByLocation(location)
            .then((results) => {
                setResults(results)
            })
    }

    const findGuidesByLocation = (location) => {
        userService.findGuidesByLocation(location)
            .then((guides) => {
                setGuides(guides)
            })
    }

    return(
        <div className="container">
<<<<<<< HEAD

            <div >
                <div className="row" >
                    {/*<div className="col-1">*/}
                    {/*    <i className="fas fa-bars fa-2x wbdv-nav-hbg-logo"></i>*/}
                    {/*</div>*/}
                    {/*<div className="col-2 d-none d-lg-block wbdv-nav-title">*/}
                    {/*    Travel With Locals*/}
                    {/*</div>*/}
                    <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                    <div className="col-5">
=======
                <div className="col row wbdv-sticky-top">
                    <div className="d-none d-lg-block">
                        <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                        <br/>
                    </div>
                    <div className="col-6 col-lg-5">
>>>>>>> 0b038bf90658b180694ad45a61d04923b545266e
                        <input value={searchLocation}
                               onChange={(event) => {
                                   setSearchLocation(event.target.value)
                               }}
                               className="form-control-2"/>
                    </div>
                    <div className="col-3 col-lg-1">
                        {/*<button onClick={() => {findPOIByLocation(searchLocation)}} className="fas fa-search fa-2x wbdv-nav-plus-logo">*/}
                            <a onClick={() => {
                                findPOIByLocation(searchLocation)
                                findGuidesByLocation(searchLocation)
                            }} className="fas fa-search fa-2x" role="button" ></a>
                        {/*</button>*/}
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <p>Welcome {user.getName()}</p>
                    </div>
<<<<<<< HEAD

                    <div className="col-1 float-right">
=======
                    <div className="col-3 col-lg-1 float-right">
>>>>>>> 0b038bf90658b180694ad45a61d04923b545266e
                            <Link to="/profile">
                                <button type="button" className="btn btn-light float-right">Profile</button>
                            </Link>
                            {/*<Link to="/">*/}
                            {/*    <a className="btn btn-block btn-info">*/}
                            {/*        Home*/}
                            {/*    </a>*/}
                            {/*</Link>*/}
                    </div>

                    {console.log("SearchScreen Current User: " + user.getName())}

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

            <div className="row wbdv-container-position">
                <div className="col-8">
                    <ul className="list-group">
                        {
                            results.results && results.results.map((poi, idx) =>{
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
                {
                    guides.length > 0 &&
                    <div className="col-4">
                        <div className="row">
                            <h3>
                                Recommended Guides
                            </h3>
                        </div>
                        <div className="row">
                            {
                                guides.map(guide =>
                                    <GuideCard guide={guide}/> )
                            }
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default SearchScreen
