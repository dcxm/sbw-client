import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import ItemCard from '../components/ItemCard'
import CardActionLink from '../components/Card/CardActionLink'
import Link from '../components/Link'

import { getItemsAction, editItemsAction } from '../store/actions/itemActions'
import { setOpenableAction } from '../store/actions/openablesActions'

import { useHistory } from 'react-router-dom'

const Items = ({ items, getItems, setOpenable, updateItem }) => {
    const history = useHistory()

    useEffect(() => {
        getItems()
    }, [])


    const handleEditClick = (item) => setOpenable({ field: 'editDialog', item })

    const handleDeleteClick = (item) => setOpenable({ field: 'deletePrompt', item })

    return (
        <>
            {items.length > 0 ? items.map((item, index) => (
                <ItemCard
                    key={index}
                    title={item.title}
                    summary={item.summary}
                    tags={item.tags}
                    completed={item.completed}
                    updateCompleted={() => updateItem(item._id, {completed: !item.completed})}
                    handleSummaryReaderOpen={() => setOpenable({field: 'summaryReaderDialog', item})}
                    actions={[
                        <CardActionLink onClick={() => history.push(`/write/${item._id}`)}>Write!</CardActionLink>,
                        <CardActionLink onClick={() => handleEditClick(item)}>Edit</CardActionLink>,
                        <CardActionLink onClick={() => handleDeleteClick(item)}>Delete</CardActionLink>
                    ]}
                />
            ))
                : <div>No added items. <Link underline onClick={() => setOpenable({field: 'addItemDialog'})}>Add one!</Link></div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    const { items } = state
    return {
        items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItemsAction()),
        setOpenable: (field) => dispatch(setOpenableAction(field)),
        updateItem: (id, data) => dispatch(editItemsAction(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
