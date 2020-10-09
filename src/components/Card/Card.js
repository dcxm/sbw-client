import React from 'react'

import styled from 'styled-components'

import P from '../P'
import Header from '../Header'
import Hr from '../Hr'
import Tag from '../Tag'

import CardActions from './CardActions'
import CardContent from './CardContent'
import CardHeader from './CardHeader'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.colors.navbar.border};
    border-radius: 1em;
    padding: 1.5em 1.5em 2em 1.5em;
    width: 100%;
    position: relative;
`

CardWrapper.defaultProps = {
    theme: {
        colors: {
            navbar: {
                border: 'gray'
            }
        }
    }
}

const Card = ({header, children}) => {
    return (
        <CardWrapper>
            <CardHeader>
                {header}
            </CardHeader>
            <Hr />
            <CardContent direction="row">
                {children}
            </CardContent>
        </CardWrapper>
    )
}

export default Card
