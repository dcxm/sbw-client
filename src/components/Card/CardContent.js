import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 95%; 
    flex-direction: ${({ direction }) => direction}; 
    box-sizing: border-box;
    @media (max-width: 550px) {
        flex-direction: column;
    }
`

const CardContent = ({ children, direction }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Wrapper direction={direction}>
                {children}
            </Wrapper>
        </div>
    )
}

CardContent.defaultProps = {
    direction: 'column'
}

export default CardContent