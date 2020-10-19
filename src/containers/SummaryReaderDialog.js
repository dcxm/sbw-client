import React, { useState } from 'react'

import { connect } from 'react-redux'
import { setOpenableAction } from '../store/actions/openablesActions'

import Dialog from '../components/Dialog/Dialog'
import Button from '../components/Buttons/Button'
import P from '../components/P'
import Main from '../components/Main'

const SummaryReaderDialog = ({ open, setOpenable, summary }) => {

    const handleDialogClose = () => setOpenable({ field: 'summaryReaderDialog', item: {} })

    return (
        <Dialog
            title="Summary"
            open={open}
            closeAction={handleDialogClose}
            style={{
                top: "0%",
                right: "0%",
                width: "100%",
                height: "100%"
            }}
            border="0"
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        onClick={handleDialogClose}
                        color="secondary"
                        textColor="white"
                        size={1.7}
                        rounded
                    >Close</Button>
                </div>
            }
            footerSize={2}
        >
            <Main align="flex-start" style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <P style={{ whiteSpace: "pre-wrap" }}>{summary}</P>
            </Main>
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    const { open, item } = state.openables.summaryReaderDialog
    return {
        open,
        summary: item.summary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenable: (payload) => dispatch(setOpenableAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryReaderDialog)