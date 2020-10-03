import React from 'react'

import styled from 'styled-components'

const showHeader = (variant, children, style) => {
    const StyledHeader = styled[`h${variant ? variant : '1'}`]`
        color: ${({theme}) => theme.colors.text};
        margin: .5em 0;
    `

    StyledHeader.defaultProps = {
        theme: {
            colors: {
                text: 'inherit'
            }
        }
    }

    return (
        <StyledHeader style={{...style}}>
            {children}
        </StyledHeader>
    )
}

const Header = ({variant, children, style}) => {
    return showHeader(variant, children, style)
}

export default Header
