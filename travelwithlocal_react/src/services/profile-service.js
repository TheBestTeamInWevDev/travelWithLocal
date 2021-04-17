const PROFILE_URL = "https://";

const findProfileById = (pid) => {
    return fetch(`${PROFILE_URL}/${pid}`)
        .then(response => response.json)
}

const updateProfile = (pid, profile) => {
    return fetch(`${PROFILE_URL}/${pid}`,{
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const api = {
    findProfileById, updateProfile
}

export default api;

