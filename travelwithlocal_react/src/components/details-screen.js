import React from 'react'
import {useHistory} from 'react-router-dom'

const DetailsScreen = () => {
    const history = useHistory()
    return(
        <div>
            <button className="btn btn-primary" onClick={() => history.goBack()}>
                Back
            </button>
            <h2>Details Screen</h2>
        </div>
    )
}

export default DetailsScreen