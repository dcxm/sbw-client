import React from 'react'

import { connect } from 'react-redux'
import { setOpenableAction } from '../store/actions/openablesActions'
import { deleteItemAction } from '../store/actions/itemActions'

import Button from '../components/Buttons/Button'
import Prompt from '../components/Dialog/Prompt'

const DeletePrompt = ({ open, setOpenable, item, deleteItem }) => {

    const handleClose = () => setOpenable({ field: 'deletePrompt', item: {} })
    const handleDelete = () => handleClose() && deleteItem(item._id)

    return (
        <Prompt
            title={`Delete ${item.title ? item.title : "item"}`}
            open={open}
            closeAction={handleClose}
            footer={<>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        onClick={handleDelete}
                        color="secondary"
                        textColor="white"
                        style={{ marginRight: "1em" }}
                        size={1.7}
                        rounded
                    >Delete</Button>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        textColor="white"
                        size={1.7}
                        rounded
                    >Cancel</Button>
                </div>
            </>}
            footerSize={2}
        >
            Are you sure you want to delete { item.title ? `"${item.title}"` : 'this item'}?

        </Prompt>
    )
}

const mapStateToProps = (state) => {
    const { item, open } = state.openables.deletePrompt
    return {
        item: item,
        open: open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenable: (payload) => dispatch(setOpenableAction(payload)),
        deleteItem: (payload) => dispatch(deleteItemAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletePrompt)
