export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    )

    if (!response.ok) {
        throw new Error('Произошла ошибка, попробуй позже')
    }

    const data = await response.json()
    return data
}

export async function login({ email, password }) {
    return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            'content-type': 'application/json',
        },
    })
}

export async function register({ email, password }) {
    return fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            username: email,
        }),
        headers: {
            'content-type': 'application/json',
        },
    })
}
