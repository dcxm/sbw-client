import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { setOpenableAction } from '../store/actions/openablesActions'
import { editItemsAction } from '../store/actions/itemActions'

import Dialog from '../components/Dialog/Dialog'
import Button from '../components/Buttons/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Label from '../components/Label'
import Textarea from '../components/Textarea'

const EditDialog = ({ item, open, setOpenable, updateItem }) => {
    const [formState, setFormState] = useState({})

    useEffect(() => setFormState({ title: item.title, summary: item.summary }), [item])

    const handleDialogClose = () => {
        setOpenable({ field: 'editDialog', item: {} })
    }

    const handleUpdate = () => {
        updateItem(item._id, formState)
        handleDialogClose()
    }

    return (
        <Dialog
            title={item.title}
            open={open}
            closeAction={handleDialogClose}
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        onClick={handleUpdate}
                        color="secondary"
                        textColor="white"
                        size={1.7}
                        rounded
                    >Update</Button>
                </div>
            }
            footerSize={2}
        >
            <Form>
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                />
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                    name="summary"
                    value={formState.summary}
                    onChange={(e) => setFormState({ ...formState, summary: e.target.value })}
                ></Textarea>
            </Form>
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    const { open, item } = state.openables.editDialog
    return {
        item: item,
        open: open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenable: (payload) => dispatch(setOpenableAction(payload)),
        updateItem: (id, data) => dispatch(editItemsAction(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
