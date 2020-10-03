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
    padding: 1.5em;
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


const H2 = ({ children }) => <Header variant="2">{children}</Header>
const CardTitle = styled(H2)`
    max-width: 40%;
`

const Card = () => {
    return (
        <CardWrapper>
            <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardActions items={[<P>Write!</P>, <P>Edit</P>, <P>Delete</P>]} />
            </CardHeader>
            <Hr />
            <CardContent direction="row">
                <div style={{width: window.innerWidth <= 550 ? "95%" : "60%", paddingRight: "1.5em", boxSizing: "border-box"}}>
                    <Header variant="3">Summary</Header>
                    <P margin='.5em auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis similique suscipit ut labore amet.</P>
                </div>
                <div style={{width: window.innerWidth <= 550 ? "95%" : "40%", boxSizing: "border-box"}}>
                    <Header variant="3">Tags</Header>
                    {
                        ['dadad', 'MyMy',3,4,'John Doe','The death and rise of Mary',7,8,9,10,11,12,13,14].map((n, i) => i >= 10 ? '' : <Tag>{n}</Tag>)
                    }
                </div>
            </CardContent>
        </CardWrapper>
    )
}

export default Card
