import React, { useState } from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import NavLinks from '../components/NavLinks'
import NavWrapper from '../components/NavWrapper'
import NavbarCollapseButton from '../components/Buttons/NavbarCollapseButton'
import Link from '../components/Link'

const SiteTitle = styled.h1`
  font-size: 1.5em;
`

const Icon = styled.div`
    width: 55%;
`

const transitionStyles = {
    entering: { transform: `translateY(-101%)` },
    entered: { transform: `` },
    exiting: { transform: `translateY(-101%)` },
    exited: { transform: `translateY(-101%)` }
}

const animationDuration = 200 // in ms

const Navbar = ({ title, user, collapseIcon, isNavbarOpen, setNavbarOpen }) => {
    // const [isNavbarOpen, setNavbarOpen] = useState(true)
    return (
        <>
            <Transition
                in={isNavbarOpen}
                timeout={animationDuration}>
                {state =>
                    <NavWrapper border transitionProp={isNavbarOpen}
                        style={{
                            transform: ``,
                            transition: `transform ${animationDuration}ms`, ...transitionStyles[state]
                        }}>
                        <Link to='/' style={{display: "flex", alignItems: "center"}}>
                            <SiteTitle>{title}</SiteTitle>
                        </Link>
                        <NavLinks customComponents menu={[
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <strong style={{ fontSize: '2em', marginLeft: '.2em' }}>
                                    {user.email && user.email[0]}
                                </strong>
                            </div>
                        ]} />
                    </NavWrapper >
                }
            </Transition>
            <NavbarCollapseButton onClick={() => setNavbarOpen(!isNavbarOpen)} isNavbarOpen={isNavbarOpen}>
                <Icon>{collapseIcon}</Icon>
            </NavbarCollapseButton>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setNavbarOpen: () => dispatch({type: "SET_OPENABLE", payload: {field: "header"}})
})

const mapStateToProps = (state) => {
    const {openables} = state
    const {user} = state
    return {
        isNavbarOpen: openables.header.open,
        user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
