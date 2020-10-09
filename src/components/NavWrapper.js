import React from 'react'

import styled from 'styled-components'

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => height};
  padding: 0 4em;
  background-color: ${({theme}) => theme.colors.navbar.background ? theme.colors.navbar.background : 'lightgray'};
  color: ${({theme}) => theme.colors.navbar && theme.colors.navbar.text};
  border: ${({theme, border}) => border ? `2px solid ${theme.colors.navbar.border}` : 'none'};
  border-width: ${({border}) => border ? '0 0 2px 0' : '0'}
`

NavWrapper.defaultProps = {
  height: '4em',
  theme: {
    colors: {
      navbar: {
        text: 'black',
        border: 'gray'
      }
    }
  }
}

export default NavWrapper