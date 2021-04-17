import React from 'react'
import {Link, Route} from "react-router-dom"
import "./home-screen-style.css"
const HomeScreen = () => {
    return(
<<<<<<< HEAD
        <div>
            <h2>Home Screen</h2>
            <Link to="/search">
                Search
            </Link>
            <br/>
            <Link to="/register">
                Register
            </Link>
            <br/>
            <Link to="/login">
                Login
            </Link>
            <br/>
            <Link to="/profile">
                Profile
            </Link>

            {/*<br/>            */}
            {/*<Link to="/details">*/}
            {/*    Details*/}
            {/*</Link>
*/}
        </div>
=======
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
>>>>>>> be1c7fb3c3c1441ad91c06da826790642d5e7761
    )
}

export default HomeScreen