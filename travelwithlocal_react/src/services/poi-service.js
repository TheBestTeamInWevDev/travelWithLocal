const proxyurl = "https://blooming-retreat-25143.herokuapp.com/";
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

const findPhotoByPhotoReference = (photoReference) => {
    return fetch(`${proxyurl}https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA
`)
        .then(res => res.text())
// https://maps.googleapis.com/maps/api/place/details/json?place_id=${}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA
}

export default {
    findPOIByLocation,
    findPlaceByPoiID,
    findPhotoByPhotoReference
}