const findPOIByLocation = (location) => {
    // return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+${location}&key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA`)
    return fetch(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAjUoHi6PrcZGhozeFlcc3475p95MewCkA&libraries=places&callback=initMap`)

        .then(res => res.json())
}

export default {
    findPOIByLocation
}