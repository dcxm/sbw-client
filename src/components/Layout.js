import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'

import Navbar from '../containers/Navbar'
import Dialog from './Dialog/Dialog'
import CircularButton from './Buttons/CircularButton'

import { ReactComponent as CollapseIcon } from '../icons/angle-up-solid.svg'
import { connect } from 'react-redux'
import { setOpenableAction } from '../store/actions/openablesActions'

const Layout = ({ children, setOpenable }) => {
    const isLoginPage = useLocation().pathname === '/login'

    const handleAddItemOpen = () => setOpenable({field: 'addItemDialog'})

    return (
        <>
            {!isLoginPage && <Navbar title="SBW" collapseIcon={<CollapseIcon />} />}
            {children}
            {!isLoginPage &&
                <>
                    <CircularButton
                        onClick={handleAddItemOpen}
                        size={5}
                        position="fixed"
                        style={{
                            bottom: "2%",
                            right: "2%",
                            fontSize: "1.5em",
                            color: "white"
                        }}
                    >+</CircularButton>
                </>}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenable: (payload) => dispatch(setOpenableAction(payload))
    }
}

export default connect(null, mapDispatchToProps)(Layout)
