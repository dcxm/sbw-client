import React from 'react'

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



const Dialog = ({ title, open, closeAction, children }) => {

    const handleClickawayClose = (e) => {
        if (e.target.classList.contains('dialog-overlay')) {
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
                        <AbsoluteWrapper>
                            <Wrapper>
                                <DialogHeader>
                                    <Header variant="1">{title}</Header>
                                    <CloseButton onClick={closeAction}>X</CloseButton>
                                </DialogHeader>
                                <Hr margin="0 0 0 0" />
                                <ContentWrapper>
                                    <DialogContent>
                                        {children}
                                    </DialogContent>
                                </ContentWrapper>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    height: '100%'
                                }}>
                                <DialogFooter size={4} />
                                </div>
                            </Wrapper>
                        </AbsoluteWrapper>
                    </FixedWrapper>
                }
            </Transition>
        </>
    )
}

export default Dialog
