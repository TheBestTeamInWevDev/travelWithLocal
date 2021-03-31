import React from 'react'
import {Link, Route} from "react-router-dom"
import "./home-screen-style.css"
const HomeScreen = () => {
    return(
            // <br/>
            // <Link to="/details">
            //     Details
            // </Link>
            //
            <div className="wbdv-sticky-top">
                <div className="row" >
                    <div className="col">
                        <i className="fas fa-bars fa-2x wbdv-nav-hbg-logo"></i>
                    </div>
                    <div className="col-2 d-none d-lg-block wbdv-nav-title">
                        TravelBuddy
                    </div>
                    <div className="col-8">
                        <input type="text"
                               className="form-control"
                            // // onChange={(event) => setNewTitle(event.target.value)}
                            //    onChange={evt => this.addCourseWithName(evt)}
                            //    value={this.state.courseName}
                        />
                    </div>
                    <div className="col-1">
                        <Link to="/search">
                            <a className="fas fa-search fa-2x wbdv-nav-plus-logo" role="button" ></a>
                        </Link>
                    </div>

                </div>
            </div>
    )
}

export default HomeScreen