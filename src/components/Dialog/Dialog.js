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



const Dialog = ({ title, open, closeAction, children, footer, footerSize, style, border }) => {

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
                            ...transitionStyles[state],
                        }}
                    >
                        <AbsoluteWrapper style={{...style}}>
                            <Wrapper border={border}>
                                <DialogHeader>
                                    <Header variant="1" style={{maxWidth: "85%"}}>{title}</Header>
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

export default Dialog
