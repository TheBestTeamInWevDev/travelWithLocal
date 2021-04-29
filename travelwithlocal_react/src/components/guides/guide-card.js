import React, {useState} from 'react'
import {Link} from "react-router-dom";
import PublicProfile from "./public-profile";

const GuideCard = ({guide}) => {
    return(
        <div className="card m-1">
            <div className="card-body">

                <Link to={`/profile/${guide.username}`}>
                    <h6>
                        {guide.username}
                    </h6>
                </Link>
                <p className="card-text search_content">
                    There is no description about this local guide.
                </p>
            </div>
        </div>

    )
}

export default GuideCard