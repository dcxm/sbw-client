import React from 'react'

import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
`

const Form = ({ children, method, action, style, onSubmit }) => {
    return (
        <StyledForm
            method={method ? method : 'POST'}
            action={action ? action : ''}
            onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}
            style={style}>
            {children}
        </StyledForm>
    )
}

export default Form