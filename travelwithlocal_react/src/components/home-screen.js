import React from 'react'
import {Link, Route} from "react-router-dom"
import "./home-screen-style.css"
const HomeScreen = () => {
    return(
        <div className="container">
            <div>
                <img src="https://i.ibb.co/sJZhzGx/47f15056e63744568e8d6704c3234446.png"  />
                <br/>
            </div>
            <div className="d-none d-lg-block">
                <Link to="./login">
                    <button type="button" className="btn btn-secondary float-right">Login</button>
                </Link>
                <Link to="./register">
                    <button type="button" className="btn btn-light float-right">Register</button>
                </Link>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <img src="https://i.ibb.co/txgpkcs/homepage1.jpg" width="540" alt="homepage" />
                    {/*<h4>hello</h4>*/}
                </div>

                <div className="col-sm-6 d-none d-xl-block">
                    <h2 id="sentence">Where you off to next?</h2>

                    <Link to="./search">
                        <button
                            type="button"
                            className="btn btn-secondary float-right"
                            id="get_started"
                            to="/search/">Get Started</button>
                    </Link>

                    <h2 id="looking_for">What you are looking for?</h2>
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
            {/*<div className="col-sm-6">*/}
            {/*    */}
            {/*        <input type="text" placeholder="Search..">*/}
            {/*</div>*/}

        </div>
    )
}

export default HomeScreen