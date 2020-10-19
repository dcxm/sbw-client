import React, { useState, useEffect, useRef } from "react";

import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { editItemsAction } from '../store/actions/itemActions'

const Write = ({ updateItem }) => {
    const [value, setValue] = useState('');

    const quillRef = useRef({})

    const id = useParams().id

    const getCurrentItem = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
            method: 'GET',
            credentials: 'include',
            cors: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((jsonResponse) => jsonResponse.json())
            .then(res => {
                if (res.error) return
                setValue(res.content)})
    }

    const handleItemUpdate = () => updateItem(id, { content: value })

    const setupKeyboardShortcuts = (quill) => {
        const { keyboard } = quill.editor
        const aligns = [
            { key: 'A', align: '' },
            { key: 'S', align: 'center' },
            { key: 'D', align: 'right' },
            {key: 'F', align: 'justify'}
        ]
        aligns.forEach(({key, align}) => {
            console.log(align)
            keyboard.addBinding({
                key: key,
                altKey: true
            }, () => {
                quill.editor.format('align', align)
            })
        })
    }

    const registerAttributors = () => {
        const AlignClass = Quill.import('attributors/class/align')
        const AlignStyle = Quill.import('attributors/style/align')
        Quill.register(AlignClass, true)
        Quill.register(AlignStyle, true)
    }

    useEffect(() => {
        const { current: quill } = quillRef
        setupKeyboardShortcuts(quill)
        getCurrentItem(id)
        registerAttributors()
    }, [])

    return (
        <div style={{ height: "100%" }}>
            <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                onKeyUp={handleItemUpdate}
                scrollingContainer="body"
                ref={quillRef}
                modules={{
                    toolbar: [
                        'bold',
                        'italic',
                        { 'header': '1' },
                        { 'header': '2' },
                        'link'
                    ]
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (id, data) => dispatch(editItemsAction(id, data))
    }
}

export default connect(null, mapDispatchToProps)(Write)
