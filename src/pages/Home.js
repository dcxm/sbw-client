import React from 'react'

import Main from '../components/Main'
import ItemCard from '../components/ItemCard'
import Header from '../components/Header'

const Home = () => {
    return (
        <>
            <Main>
                <Header variant={'1'} style={{ marginBottom: '1em' }}>
                    My writings
                </Header>
                <ItemCard />
            </Main>
        </>
    )
}

export default Home
