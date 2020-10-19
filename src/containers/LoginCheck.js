import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../store/actions/userActions'

import { useHistory, useLocation } from "react-router-dom";

const LoginCheck = ({ user, storeUser, children }) => {

    const history = useHistory()
    const location = useLocation()


    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        const errorObject = { error: 'Not logged in, please log in' }
        const userCheck = async () => {
            try {
                const user = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                    cors: true,
                    credentials: 'include'
                })
                if (user.status === 403) {
                    localStorage.setItem('isLoggedIn', 'false')
                    if (location.pathname === '/login') return 
                    return history.push('/login', errorObject)
                }
                const res = await user.json()
                storeUser(res)
            } catch (err) {
                localStorage.setItem('isLoggedIn', 'false')
                if (err) return history.push('/login', errorObject)
            }
        }
        if (isLoggedIn == 'true') {
            userCheck()
            if (location.pathname === '/login') return history.push('/')
        } else return history.push('/login', {})
    }, [])

    return (
        <>
            {children}
        </>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeUser: (payload) => dispatch({ type: 'STORE_USER', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCheck)
