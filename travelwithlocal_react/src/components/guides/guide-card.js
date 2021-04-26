import React, {useState} from 'react'
import {Link} from "react-router-dom";

const GuideCard = (
    {
        guide
    }) => {
    return(
        // <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card m-1">
                <div className="card-body">
                    <Link to={`./profile/${guide._id}`}>
                        <h6>
                            {guide.username}
                        </h6>
                    </Link>
                    <p className="card-text">
                        There is no description about this local guide.
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default GuideCard