import React, { useState } from 'react'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import NavLinks from '../components/NavLinks'
import NavWrapper from '../components/NavWrapper'
import NavbarCollapseButton from '../components/Buttons/NavbarCollapseButton'

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

const Navbar = ({ title, collapseIcon }) => {
    const [isNavbarOpen, setNavbarOpen] = useState(true)
    return (
        <>
            <Transition
                in={isNavbarOpen}
                // unmountOnExit
                // mountOnEnter
                timeout={animationDuration}>
                {state =>
                    <NavWrapper border transitionProp={isNavbarOpen}
                        style={{
                            transform: ``,
                            transition: `transform ${animationDuration}ms`, ...transitionStyles[state]
                        }}>
                        <SiteTitle>{title}</SiteTitle >
                        <NavLinks />
                            {/* customComponents menu={[<P><strong>Search</strong></P>, <P><strong>Filter</strong></P>]} */}
                            {/* menu={[{text: 'Hello', link: '/hy'}]} */}
                    </NavWrapper >
                }
            </Transition>
            <NavbarCollapseButton onClick={() => setNavbarOpen(!isNavbarOpen)} isNavbarOpen={isNavbarOpen}>
                <Icon>{collapseIcon}</Icon>
            </NavbarCollapseButton>
        </>
    )
}

export default Navbar
