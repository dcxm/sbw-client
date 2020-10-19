import React from 'react'

import Main from '../components/Main'
import Header from '../components/Header'

import Items from '../containers/Items'

const Home = () => {
    return (
        <>
            <Main>
                <Header variant={'1'} style={{ marginBottom: '.5em' }}>
                    My writings
                </Header>
                <Items />
            </Main>
        </>
    )
}

export default Home
