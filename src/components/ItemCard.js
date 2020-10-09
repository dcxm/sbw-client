import React from 'react'

import styled from 'styled-components'

import P from './P'
import Header from './Header'
import Tag from './Tag'

import Card from './Card/Card'

import CardActions from './Card/CardActions'

const ColWrapper = styled.div`
    box-sizing: "border-box";
    padding: ${({ padding }) => padding ? padding : '0'};
    width: ${({ width }) => `${width}%`};
    @media(max-width: 550px) {
        width: ${({ widthS }) => `${widthS}%`}
    }
`

ColWrapper.defaultProps = {
    width: '50%',
    widthS: '100%'
}

const H2 = ({ children }) => <Header variant="2">{children}</Header>
const CardTitle = styled(H2)`
    max-width: 40%;
`

const ItemCard = ({ title, summary, tags }) => {
    return (
        <Card header={<>
            <CardTitle>{title}</CardTitle>
            <CardActions items={[<P>Write!</P>, <P>Edit</P>, <P>Delete</P>]} />
        </>}>
            <ColWrapper width={60} widthS={100} padding='0 1.5em 0 0'>
                <Header variant="3">Summary</Header>
                <P margin='.5em auto'>{summary}</P>
            </ColWrapper>
            <ColWrapper width={40} widthS={100} >
                <Header variant="3">Tags</Header>
                {
                    tags.map((n, i) => i >= 10 ? '' : <Tag key={i}>{n}</Tag>)
                }
            </ColWrapper>
        </Card>
    )
}

ItemCard.defaultProps = {
    title: 'Item Title',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus eaque reprehenderit quam illo deserunt.',
    tags: ['John Doe', 'Novel', 7, 8, 9, 10, 11, 12, 13, 14]
}

export default ItemCard
