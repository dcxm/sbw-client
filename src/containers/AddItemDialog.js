import React, { useState } from 'react'

import { connect } from 'react-redux'
import { setOpenableAction } from '../store/actions/openablesActions'
import { addItemAction } from '../store/actions/itemActions'

import Dialog from '../components/Dialog/Dialog'
import Button from '../components/Buttons/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Label from '../components/Label'
import Textarea from '../components/Textarea'

const AddItemDialog = ({ open, setOpenable, addItem }) => {
    const [formState, setFormState] = useState({ title: '', summary: '', completed: false })

    const handleDialogClose = () => setOpenable({ field: 'addItemDialog' })

    const handleAddItem = () => handleDialogClose() && addItem({...formState, users: []})

    return (
        <Dialog
            title="Add item"
            open={open}
            closeAction={handleDialogClose}
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        onClick={handleAddItem}
                        color="secondary"
                        textColor="white"
                        size={1.7}
                        rounded
                    >Add item</Button>
                </div>
            }
            footerSize={2}
        >
            <Form style={{marginBottom: "2em"}}>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Input 
                    type="checkbox" 
                    name="completed" 
                    style={{ width: "auto", marginRight: "1em" }} 
                    value={formState.completed}
                    onChange={(e) => setFormState({ ...formState, completed: !formState.completed })}
                    />
                    <Label htmlFor="completed" margin="0">
                        Is already completed?
                    </Label>
                </div>
            </Form>
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    const { open } = state.openables.addItemDialog
    return {
        open: open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpenable: (payload) => dispatch(setOpenableAction(payload)),
        addItem: (data) => dispatch(addItemAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemDialog)
