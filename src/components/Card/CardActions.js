import React from 'react'

import styled from 'styled-components'

const CardActionsWrapper = styled.div`
    display: flex;
    max-width: 60%;
`

const CardAction = styled.div`
    font-size: 1.05em;
    font-weight: 600;
    padding: 0 .85em;
`

const CardActions = ({ items }) => {
    return (
        <CardActionsWrapper>
            {items.map((item, index) =>
                <CardAction key={index}>{item}</CardAction>
            )}
        </CardActionsWrapper>
    )
}

export default CardActions