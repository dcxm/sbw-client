import React from 'react'

import styled from 'styled-components'

const NavbarCollapseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5em;
    height: 3.5em;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: fixed;
    top: .6em;
    right: 1em;
    cursor: pointer;
    outline: none;
    transform: ${({ isNavbarOpen }) => !isNavbarOpen ? `rotate(180deg)` : `rotate()`};
    transition: all .2s;
`

NavbarCollapseButton.defaultProps = {
    theme: {
        colors: {
            secondary: 'gray'
        }
    },
    isNavbarOpen: true
}

export default NavbarCollapseButton