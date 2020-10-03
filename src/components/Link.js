import React from 'react'

import styled from 'styled-components'

const Link = styled.a`
    color: ${({theme}) => theme.colors.navbar.text};
    text-decoration: none;
    font-weight: 600;
    height: 100%;
`

Link.defaultProps = {
  theme: {
    colors: {
      navbar: {
        text: 'black'
      }
    }
  }
}

  export default Link