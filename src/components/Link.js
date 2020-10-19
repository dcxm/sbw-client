import React from 'react'

import styled from 'styled-components'

import {Link as RouterLink} from 'react-router-dom'

const Link = styled(RouterLink)`
    color: ${({theme}) => theme.colors.navbar.text};
    text-decoration: ${({underline}) => underline ? 'underline' : "none"};
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