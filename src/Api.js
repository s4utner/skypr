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
    const data = await response.json()
    console.log(data)
    return data
}

export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/',
        {
            method: 'GET',
            headers: { Authorization: `Bearer ${getToken()}` },
        },
    )
    const data = await response.json()
    console.log(data)
    return data
}
