const USER_API = "http://localhost:4000/api/users";

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}


const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const register = (credentials) => {
    console.log("Register Service: UserName: "+ credentials.username
        + " email: " + credentials.email
        + " Password: " +credentials.password
        + " role: "+ credentials.role)
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const update = (credentials) => {
    console.log("Update Service: UserName: "+ credentials.username
        + " email: " + credentials.email
        + " Password: " +credentials.password
        + " role: "+ credentials.role)
    return fetch(`${USER_API}/update`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findGuidesByLocation = (location) => {
    return fetch(`${USER_API}/findGuides/${location}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findPublicProfile = (username) => {
    return fetch(`${USER_API}/publicProfile/${username}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export default {
    register, login, logout, profile, update, findGuidesByLocation, findPublicProfile
}