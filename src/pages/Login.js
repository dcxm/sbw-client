import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { getUser } from "../store/actions/userActions";

import styled from 'styled-components'

import { useHistory, useLocation } from 'react-router-dom'

import Header from '../components/Header'
import Main from '../components/Main'
import Form from '../components/Form'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Buttons/Button'

const Wrapper = styled.div`
    width: 70%;
`

const ErrorBox = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    margin: 1em 0 0 0;
    justify-content: center;
    align-items: center;
    border: 2px solid darkred;
    padding: 1em;
`

const Login = ({ getUser }) => {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.error) setError(location.state.error)
    }, [])

    const handleLogin = async () => {
        const validationErrorText = 'The email should be valid, the password should contain minimum 6 characters'
        if (formState.email.length < 4) return setError(validationErrorText)
        if (formState.password.length < 6) return setError(validationErrorText)
        setError('')
        try {
            await getUser(formState)
            history.push('/')
        } catch ({error}) {
            if (error) return setError(error)
        }
    }

    return (
        <Main align='center'>
            <Wrapper>
                <Header variation="1">Login</Header>
                {error && <ErrorBox onClick={() => setError('')}>{error}</ErrorBox>}
                <Form method="POST">
                    <Label htmlFor="username">Email</Label>
                    <Input
                        type="email"
                        size={1.2}
                        name="username"
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        id="username"
                        placeholder="Type your email here"
                    />
                    <Label htmlFor="username">Password</Label>
                    <Input
                        type="password"
                        size={1.2}
                        name="password"
                        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                        id="password"
                        autocomplete="current-password"
                        placeholder="Type your password here"
                    />
                    <Button
                        type="button"
                        style={{ marginTop: '1.2em' }}
                        onClick={handleLogin}
                        bordered
                        rounded
                        size={1.2}>
                        Sign in
                    </Button>
                </Form>
            </Wrapper>

        </Main>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (loginData) => dispatch(getUser(loginData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
