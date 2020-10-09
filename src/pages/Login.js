import React, { useState } from 'react'

import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

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

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const history = useHistory()

    const handleLoginClick = () => {
        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(jsonResponse => jsonResponse.json())
            .then(res => {
                if (res.error) setError(res.error)
                return history.push('/')
            })
            .catch(err => console.log(err))
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
                        onClick={handleLoginClick}
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

export default Login
