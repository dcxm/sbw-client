import React from 'react'

import styled from 'styled-components'

import CircularButton from './CircularButton'

const NavbarCollapseButton = styled(CircularButton)`
    position: ${({position}) => position};
    top: .6em;
    right: 1em;
    z-index: 100;
    transform: ${({ isNavbarOpen }) => !isNavbarOpen ? `rotate(180deg)` : `rotate()`};
    transition: all .2s;
`

NavbarCollapseButton.defaultProps = {
    isNavbarOpen: true,
    position: 'fixed'
}

export default NavbarCollapseButton