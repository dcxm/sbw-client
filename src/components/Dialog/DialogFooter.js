import React from 'react'

import styled from 'styled-components'

import Hr from '../Hr'


const DialogFooterWrapper = styled.div`
        display: flex;
        box-sizing: border-box;
        width: 100%;
        min-height: ${({ height }) => height};
    `

DialogFooterWrapper.defaultProps = {
    height: "auto"
}

const DialogFooterContent = styled.div`
        display: flex;
        width: 100%;
        align-items: center;
        padding: ${({ size }) => `${size * 0.5}em ${size * 1}em`};
    `

DialogFooterContent.defaultProps = {
    size: 1.5
}

const DialogFooter = ({ children, size, height }) => {
    return (
        <DialogFooterWrapper height={height}>
            <Hr margin="0 0 1em 0" style={{ alignItems: "flex-start" }} />
            <DialogFooterContent size={size}>
                {children}
            </DialogFooterContent>
        </DialogFooterWrapper>
    )
}

export default DialogFooter