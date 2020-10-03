import React from 'react'

import styled from 'styled-components'

import Hr from './Hr'
import Header from './Header'

const FixedWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({open}) => open ? 'rgba(0, 0, 0, 0.6)': 'none'};
    top: 0%;
    z-index: 1;
`

FixedWrapper.defaultProps = {
    open: false
}

const AbsoluteWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 10%;
    width: 80%;
    height: 80%;
`

const Wrapper = styled.div`
    display: flex;
    z-index: 2;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: white;
`

const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    padding: ${({ size }) => `${size * 0.5}em ${size * 1}em`};
`

DialogHeader.defaultProps = {
    size: 1.5
}

const ContentWrapper = styled.div`
    overflow: hidden;
    overflow-y: auto;
`

const DialogContent = styled.div`
    padding: 2.5em 5em;
`

const Dialog = ({ title, open, closeAction }) => {

    const handleClickawayClose = (e) => {
        if (e.target.classList.contains('dialog-overlay')) {
            closeAction()
        }
    }

    return (
        <>
            {open &&
                <FixedWrapper open={open} onClick={handleClickawayClose} className="dialog-overlay">
                    <AbsoluteWrapper>
                        <Wrapper>
                            <DialogHeader>
                                <Header variant="1">{title}</Header>
                                <button onClick={closeAction}>X</button>
                            </DialogHeader>
                            <Hr margin="0 0 0 0" />
                            <ContentWrapper>
                                <DialogContent>

                                </DialogContent>
                            </ContentWrapper>
                        </Wrapper>
                    </AbsoluteWrapper>
                </FixedWrapper>
            }
        </>
    )
}

export default Dialog
