import React from 'react'

import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
`

const Form = ({children, method, style}) => {
    return (
        <StyledForm method={method} style={style}>
            {children}
        </StyledForm>
    )
}

export default Form