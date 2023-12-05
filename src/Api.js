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

export async function signUp({ email, password }) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/signup/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                username: email,
            }),
            headers: {
                'content-type': 'application/json',
            },
        },
    )

    if (response.status === 400) {
        throw new Error('Произошла ошибка, попробуй позже')
    } else if (response.status === 500) {
        throw new Error('Сервер не отвечает, попробуй позже')
    }

    const data = await response.json()
    console.log(data)
    return data
}

export async function signIn({ email, password }) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/login/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        },
    )

    if (!response.ok) {
        throw new Error('Произошла ошибка, попробуй позже')
    }

    const data = await response.json()
    console.log(data)
    return data
}
