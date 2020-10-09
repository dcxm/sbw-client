import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'

import Navbar from '../containers/Navbar'
import Dialog from './Dialog/Dialog'
import CircularButton from './Buttons/CircularButton'

import { ReactComponent as CollapseIcon } from '../icons/angle-up-solid.svg'

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const isLoginPage = useLocation().pathname === '/login'
    return (
        <>
            {!isLoginPage && <Navbar title="SBW" collapseIcon={<CollapseIcon />} />}
            {children}
            {!isLoginPage &&
                <>
                    <CircularButton
                        onClick={() => setOpen(!open)}
                        size={5}
                        position="fixed"
                        style={{
                            bottom: "2%",
                            right: "2%",
                            fontSize: "1.5em",
                            color: "white"
                        }}
                    >+</CircularButton>
                    <Dialog title="Add items" open={open} closeAction={() => setOpen(!open)}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="" />
                    </Dialog>
                </>}
        </>
    )
}

export default Layout
