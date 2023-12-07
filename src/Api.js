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

export async function signIn({ email, password }) {
    try {
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

        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}
