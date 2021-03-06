import React, {useState, useEffect} from 'react'
import {Link, Route} from "react-router-dom"
import "./home-screen-style.css"
import userService from "../services/user-service"
import poiService from"../services/poi-service"
import GuideCard from "./guides/guide-card";

const HomeScreen = () => {
    const [user, setUser] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        userService.profile()
            .then((user) => {
                setUser(user)
            })
        poiService.findSortedPoi()
            .then((results) => {
                setImages(results)
                console.log("findSortedPoi returned results" + results)
            })
    }, [])
    return(

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                    <br/>
                </div>

                {
                    !user.username &&
                    <div className="col-6 mt-2">
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary float-right">Login</button>
                        </Link>
                        <Link to="/register">
                            <button type="button" className="btn btn-light float-right">Register</button>
                        </Link>
                    </div>
                 }
                {
                    user.username &&
                    <div className="col-6 mt-2">
                        <Link to="/search">
                            <button type="button"
                                    className="btn btn-secondary float-right">Search
                            </button>
                        </Link>
                        <Link to="/profile">
                            <button type="button"
                                    className="btn btn-light float-right">Profile
                            </button>
                        </Link>
                    </div>
                }


            </div>
            {/*<div className="d-none d-lg-block">*/}

            {/*</div>*/}

            <div className="row">
                <div className="col-sm-6">
                    <img id="home_imag" src="https://i.ibb.co/txgpkcs/homepage1.jpg" width="540" alt="homepage" />
                    {/*<h4>hello</h4>*/}
                </div>

                <div className="col-sm-6 d-block">
                    <div className="">
                        <h2 id="sentence">Where you off to next?</h2>

                        <Link to="./search">
                            <button
                                type="button"
                                className="btn btn-secondary float-right"
                                id="get_started"
                                to="/search/">Get Started</button>
                        </Link>

                    </div>

                    <div className="d-none d-xl-block">
                    <h2 id="looking_for">What you are looking for?</h2>
                    </div>

                    <div className="d-none d-lg-block">
                        <div>
                            <Link to="./search/beach">
                                <img  id="beach_img" src="https://i.ibb.co/pyG4Bg3/1619317771819.jpg" width="120"/>
                                <h6 id="beach">Beach Activity</h6>
                            </Link>

                        </div>

                        <div>
                            <Link to="./search/new%20york%20city">
                                <img id="city_img" src="https://i.ibb.co/60XWSYX/1619317792809.jpg" width="160"/>
                                <h6 id="city_tour">City Tour</h6>
                            </Link>
                        </div>

                        <div>
                            <Link to="./search/hiking">
                                <img id="hiking_img" src="https://i.ibb.co/5Ykk722/1619317798415.jpg" width="160"/>
                                <h6 id="hiking">Hiking Trips</h6>
                            </Link>
                        </div>

                        <div>
                            <Link to="./search/food">
                                <img id="foodie_img"src="https://i.ibb.co/1r5WBkX/1619317803673.jpg" width="160"/>
                                <h6 id="foodie">Foodie Explore</h6>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <br/>

            <Link to="/search">
                <button className="btn btn-secondary mid_button">More</button>
            </Link>

            <br/>

            <div className="row">
                <div className="col vac_text d-none d-lg-block">
                    <i id="trip_icon"className="fas fa-route"></i>
                    <i id="fly_icon" className="fas fa-plane-departure"></i>
                    <h6 id="vaca_text">Vacation mood on...</h6>
                </div>
            </div>
            <br/>



            {/*<div className="d-none d-xl-block">*/}
            {/*    <div className="cla_gal_1">*/}
            {/*        <Link to = "./search/yellow%20stone">*/}
            {/*            <img id="gallery_1" className="image" src="https://i.ibb.co/xqM5s6K/IMG-20190609-120959.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}

            {/*    </div>*/}

            {/*    <div className="cla_gal_2">*/}
            {/*        <Link to = "./search/zoom">*/}
            {/*            <img id="gallery_2" src="https://i.ibb.co/mC04th6/IMG-20190609-121623.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*    <div className="cla_gal_3">*/}
            {/*        <Link to = "./search/park">*/}
            {/*            <img id="gallery_3" src="https://i.ibb.co/X3RFgfX/IMG-20190609-124957.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*    <div className="cla_gal_4">*/}
            {/*        <Link to = "./search/lake">*/}
            {/*            <img id="gallery_4" src="https://i.ibb.co/d7r504F/IMG-8834.jpg"  width="200" height="200" />*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*</div><div className="d-none d-xl-block">*/}
            {/*    <div className="cla_gal_1">*/}
            {/*        <Link to = "./search/yellow%20stone">*/}
            {/*            <img id="gallery_1" className="image" src="https://i.ibb.co/xqM5s6K/IMG-20190609-120959.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}

            {/*    </div>*/}

            {/*    <div className="cla_gal_2">*/}
            {/*        <Link to = "./search/zoom">*/}
            {/*            <img id="gallery_2" src="https://i.ibb.co/mC04th6/IMG-20190609-121623.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*    <div className="cla_gal_3">*/}
            {/*        <Link to = "./search/park">*/}
            {/*            <img id="gallery_3" src="https://i.ibb.co/X3RFgfX/IMG-20190609-124957.jpg" width="200" height="200"/>*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*    <div className="cla_gal_4">*/}
            {/*        <Link to = "./search/lake">*/}
            {/*            <img id="gallery_4" src="https://i.ibb.co/d7r504F/IMG-8834.jpg"  width="200" height="200" />*/}
            {/*        </Link>*/}
            {/*        /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*    </div>*/}

            {/*</div>*/}

            {/*<div className="cla_gal_5">*/}
            {/*    <a target="_blank" href="img_lights.jpg">*/}
            {/*        <img id="gallery_5" src="https://i.ibb.co/8rXXJz9/image.png"  width="200" height="200"/>*/}
            {/*    </a>*/}
            {/*    /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*</div>*/}

            {/*<div className="cla_gal_6">*/}
            {/*    <a target="_blank" href="img_mountains.jpg">*/}
            {/*        <img id="gallery_6" src="https://i.ibb.co/9HL5GPQ/image.png"   width="200" height="200" />*/}
            {/*    </a>*/}
            {/*    /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*</div>*/}

            {/*<div className="cla_gal_7">*/}
            {/*    <a target="_blank" href="img_mountains.jpg">*/}
            {/*        <img id="gallery_7" src="https://i.ibb.co/4Nv0TvB/image.png"   width="200" height="200" />*/}
            {/*    </a>*/}
            {/*    /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*</div>*/}

            {/*<div className="cla_gal_8">*/}
            {/*    <a target="_blank" href="img_mountains.jpg">*/}
            {/*        <img id="gallery_8"  src="https://i.ibb.co/HpCs2vt/image.png"  width="200" height="200" />*/}
            {/*    </a>*/}
            {/*    /!*<div className="desc">Add a description of the image here</div>*!/*/}
            {/*</div>*/}

            <div className="d-none d-xl-block cla_gal">
                <div className="row">
                    <h2 id="top_4_fav">Top 4 Favourite Places
                        <i className="fas fa-heart heart-icon"></i>
                    </h2>
                </div>
                {/*<p>Login in to see what is in trend</p>*/}
                <br/>

                <div className="row">

                    {
                        images.map((el) => <img id ="top_4_img" className="col-3" width="200" height="250" src={el.imageURL}/>)
                    }

                    {
                        images.map((el) => <p id ="top_4_title" className="col-3 search_content" >{el.location}{" #"}{el.length}</p>)
                    }
                </div>
            </div>
            <div className="explore d-none d-xl-block">
                <p>Explore More</p>
                <Link to="/search">
                    <button className="btn btn-secondary">More</button>
                </Link>
            </div>

        </div>
    )
}


export default HomeScreen