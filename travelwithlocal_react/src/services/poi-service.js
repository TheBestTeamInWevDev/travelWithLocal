const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";
const POI_API = "http://localhost:4000/api/poi";
// var outside

const findPOIByLocation = (location) => {
    return fetch(`${proxyurl}https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+${location}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`)
    // return fetch(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA&libraries=places&callback=initMap`)
// http://localhost:3000/search/Boston
        .then(res => res.json())
}

const findPlaceByPoiID = (PoiID) => {
    return fetch(`${proxyurl}https://maps.googleapis.com/maps/api/place/details/json?place_id=${PoiID}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA
`)
        .then(res => res.json())
}

const SavePOIForTraveler = (poiInfo) => {
    console.log("Poi Service SavePOIForUser: Poi Location: "+ poiInfo.location +
        " \nPoiId: " +poiInfo.poiID+
        " \nPoiAddress: " + poiInfo.address+
        " \nPoiImage: " + poiInfo.imageURL+
        " \nTraveler : " + poiInfo.username)
    return fetch(`${POI_API}/addPoi`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(poiInfo),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findSortedPoi = () => {
    return fetch(`${POI_API}/sort`, {
        method: "GET"
    }).then(response => response.json())
}



export default {
    findPOIByLocation,
    findPlaceByPoiID,
    SavePOIForTraveler,
    findSortedPoi
}