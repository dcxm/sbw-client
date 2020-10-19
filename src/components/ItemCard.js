import React from 'react'

import styled from 'styled-components'

import P from './P'
import Header from './Header'
import Tag from './Tag'

import Card from './Card/Card'

import CardActions from './Card/CardActions'

import Button from './Buttons/Button'
import Link from './Link'

const ColWrapper = styled.div`
    box-sizing: border-box;
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

const ItemCard = ({ title, summary, tags, actions, completed, updateCompleted, handleSummaryReaderOpen }) => {
    return (
        <Card header={<>
            <CardTitle>{title}</CardTitle>
            <CardActions items={actions} />
        </>}>
            <ColWrapper width={50} widthS={100} padding='0 1.5em 0 0'>
                <Header variant="3">Summary</Header>
            <P margin='.5em auto'>
                {
                    summary ?
                        summary.length > 200 ? 
                            <>
                                {`${summary.slice(0, 200)}... `}
                                <Link underline onClick={handleSummaryReaderOpen}>Read all</Link>
                            </>
                        : summary
                    : "No added summary"
                }
            </P>
            </ColWrapper>
            <ColWrapper width={30} widthS={100} >
                <Header variant="3">Tags</Header>
                {tags.length > 0 ?
                    tags.map((tag, i) => i >= 10 ? '' : <Tag key={i}>{tag.name}</Tag>)
                    : <div>No added tags</div>
                }
            </ColWrapper>
            <ColWrapper width={20} widthS={100} style={{marginTop: "1em"}}>
                {completed ? <Button style={{height: "5em", width: "100%", outline: "none"}} color="primary" onClick={updateCompleted} rounded textColor="white">
                Completed
                    </Button>
                    : <Button style={{height: "5em", width: "100%", outline: "none"}} color="secondary" onClick={updateCompleted} rounded textColor="white">
                    Not completed
                        </Button>
                }
            </ColWrapper>
        </Card >
    )
}

ItemCard.defaultProps = {
    title: 'Item Title',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus eaque reprehenderit quam illo deserunt.',
    tags: ['John Doe', 'Novel', 7, 8, 9, 10, 11, 12, 13, 14],
    actions: []
}

export default ItemCard
