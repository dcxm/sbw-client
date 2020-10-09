import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 7em;
`

const mediaQ = (width, content) => {
    return (
        `@media (min-width: ${width}) {
            ${content}
        }`
    )
}


const widths = [{ dw: '550px', w: '80%' }, { dw: '768px', w: '80%' }, { dw: '1024px', w: '70%' }, { dw: '1336px', w: '60%' }]

const printWidths = (widths) => {
    let widthsString = ''
    widths.forEach(item => {
        widthsString += `${mediaQ(item.dw, `width: ${item.w}`)}\n`
    })
    return widthsString
}

const WidthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({align}) => align ? align : 'flex-start'};
    width: 90%;
    ${printWidths(widths)}
`

const Container = ({ children, align }) => {
    return (
        <Wrapper>
            <WidthWrapper align={align}>
                {children}
            </WidthWrapper>
        </Wrapper>
    )
}

const Main = ({ children, align }) => {
    return (
        <main>
            <Container align={align}>
                {children}
            </Container>
        </main>
    )
}

export default Main
