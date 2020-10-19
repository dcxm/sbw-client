import React, { useEffect } from 'react'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import Hr from '../Hr'
import Header from '../Header'
import P from '../P'
import Form from '../Form'

import CloseButton from '../Buttons/CloseButton'
import { Wrapper, AbsoluteWrapper, FixedWrapper, ContentWrapper } from './Wrappers'
import DialogHeader from './DialogHeader'
import DialogContent from './DialogContent'
import DialogFooter from './DialogFooter'

const transitionDuration = 100

const PromptText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
    font-size: 1.25em;
    line-height: 1.7em;
    font-weight: 600;
    text-align: center;
`

const transitionStyles = {
    entering: {
        opacity: 0
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 1
    }
}



const Prompt = ({ title, open, closeAction, children, footer, footerSize }) => {

    useEffect(() => {
        if (open) document.querySelector('body').style.overflow = 'hidden'
        else document.querySelector('body').style.overflow = 'initial'
    }, [open])

    const handleClickawayClose = (e) => {
        if (e.target.classList.contains('dialog-overlay') && e.type === 'click') {
            console.log(e.type)
            closeAction()
        }
    }

    return (
        <>
            <Transition
                in={open}
                unmountOnExit
                mountOnEnter
                timeout={transitionDuration}
            >
                {state =>
                    <FixedWrapper
                        open={open}
                        onClick={handleClickawayClose}
                        className="dialog-overlay"
                        transitionProp={open}
                        style={{
                            opacity: 0,
                            transition: `all ${transitionDuration}ms`,
                            ...transitionStyles[state]
                        }}
                    >
                        <AbsoluteWrapper style={{ width: "60%", height: "50%" }}>
                            <Wrapper>
                                <DialogHeader>
                                    <Header variant="1" style={{maxWidth: "85%"}}>{title}</Header>
                                    <CloseButton onClick={closeAction}>X</CloseButton>
                                </DialogHeader>
                                <Hr margin="0 0 0 0" />
                                <ContentWrapper>
                                    <DialogContent style={{padding: "1.5em"}}>
                                        <PromptText>
                                            {children}
                                        </PromptText>
                                    </DialogContent>
                                </ContentWrapper>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    height: 'auto'
                                }}>
                                    <DialogFooter size={footerSize ? footerSize : 5} height="auto">
                                        {footer && footer}
                                    </DialogFooter>
                                </div>
                            </Wrapper>
                        </AbsoluteWrapper>
                    </FixedWrapper>
                }
            </Transition>
        </>
    )
}

export default Prompt
