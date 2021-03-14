import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

const marginTransitionDuration = "0.2s"

const ContainerWrapper = styled.div`
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
    justify-content: ${({Valign}) => Valign ? Valign : 'flex-start'};
    width: 90%;
    ${printWidths(widths)}
`

const Container = ({ children, align, style }) => {
    return (
        <ContainerWrapper style={{...style}}>
            <WidthWrapper align={align}>
                {children}
            </WidthWrapper>
        </ContainerWrapper>
    )
}

const Main = ({ children, align, isHeaderOpen, style }) => {
    return (
        <main>
            <Container 
                align={align} 
                style={
                    isHeaderOpen === true ? {
                        ...style, 
                        marginTop: 0, 
                        transition: `margin ${marginTransitionDuration}`,
                    }
                    :
                    {
                        ...style,
                        marginTop: "-3em", 
                        transition: `margin ${marginTransitionDuration}`
                    } 
                }
            >
                {children}
            </Container>
        </main>
    )
}

export default connect(({openables}) => ({isHeaderOpen: openables.header.open}))(Main)
