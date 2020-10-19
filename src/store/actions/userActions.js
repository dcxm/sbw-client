import { STORE_USER } from './types'

const getUser = (payload) => {
    return (dispatch) => new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(jsonResponse => jsonResponse.json())
            .then(res => {
                if (res.error) {
                    if (res.error === 'User already logged in') localStorage.setItem('isLoggedIn', true)
                    else localStorage.setItem('isLoggedIn', false)
                    reject({...res})
                }
                dispatch(storeUser({ ...res }))
                localStorage.setItem('isLoggedIn', true)
                resolve({...res})
            })
            .catch(err => console.log(err))
    })
}

const storeUser = (payload) => {
    return {
        type: STORE_USER,
        payload
    }
}

export {
    storeUser,
    getUser
}