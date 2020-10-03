import React from 'react'

import styled from 'styled-components'

const HrStyled = styled.hr`
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0%;
    width: 100%;
    border: none;
    background-color: ${({theme}) => theme.colors.borders}
`

HrStyled.defaultProps = {
    theme: {
        colors: {
            borders: 'gray'
        }
    }
}

const HrWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: ${({margin}) => margin};
`

HrWrapper.defaultProps = {
    margin: '1.5em 0'
}

const Hr = ({margin}) => {
    return (
        <HrWrapper margin={margin}>
            <HrStyled />
        </HrWrapper>
    )
}

export default Hr
