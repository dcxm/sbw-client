import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 3em;
`

const mediaQ = (width, content) => {
    return (
        `@media (min-width: ${width}) {
            ${content}
        }`
    )
}


const printWidths = () => {
    const widths = [{ dw: '550px', w: '80%' }, { dw: '768px', w: '80%' }, { dw: '1024px', w: '70%' }]
    let widthsString
    widths.forEach(item => {
        widthsString += `${mediaQ(item.dw, `width: ${item.w}`)}\n`
    })
    console.log(widthsString)
    return widthsString
}

const WidthWrapper = styled.div`
    width: 90%;
    ${printWidths()}
`

const Container = ({ children }) => {
    return (
        <Wrapper>
            <WidthWrapper>
                {children}
            </WidthWrapper>
        </Wrapper>
    )
}

const Main = ({ children }) => {
    return (
        <main>
            <Container>
                {children}
            </Container>
        </main>
    )
}

export default Main
