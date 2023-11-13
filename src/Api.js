export async function getToken() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/token/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: 'gleb@fokin.ru',
                password: 'gleb@fokin.ru',
            }),
            headers: {
                'content-type': 'application/json',
            },
        },
    )
        .then((response) => response.json())
        .then((json) => console.log(json))
}

getToken()

const token = 'asfdae'

export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
        {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        },
    )
    const data = await response.json()
    return data
}

export async function Register() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/signup/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: 'gleb@fokin.ru',
                password: 'Aa12345!!',
                username: 'gleb@fokin.ru',
            }),
            headers: {
                'content-type': 'application/json',
            },
        },
    )
        .then((response) => response.json())
        .then((json) => console.log(json))
}

export async function Login() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/login/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: 'gleb@fokin.ru',
                password: 'gleb@fokin.ru',
            }),
            headers: {
                'content-type': 'application/json',
            },
        },
    )
        .then((response) => response.json())
        .then((json) => console.log(json))
}
