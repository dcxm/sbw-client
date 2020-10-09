import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import ItemCard from '../components/ItemCard'

const Items = ({ items, getItems }) => {
    useEffect(() => {
        getItems()
    }, [])

    return (
        <ItemCard title={} />
    )
}

const mapStateToProps = (state) => {
    const { items } = state
    return {
        items
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getItems: () => dispatch(getItemsAction())
//     }
// }

export default connect(mapStateToProps)(Items)
