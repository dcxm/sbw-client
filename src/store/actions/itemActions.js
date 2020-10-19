const addItemAction = (itemData) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_URL}/items`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(itemData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(jsonResponse => jsonResponse.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: 'ADD_ITEM',
                payload: res
            })
        })
    }
}

const getItemsAction = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_URL}/items`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(jsonResponse => jsonResponse.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: 'GET_ITEMS',
                    payload: res
                })
            }
            )
            .catch(err => console.log(err))
    }
}

const editItemsAction = (id, data) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((jsonResponse) => jsonResponse.json())
            .then((res) => {
                dispatch({
                    type: 'UPDATE_ITEM',
                    payload: res
                })
            })
            .catch(err => { if (err) console.log(err) })
    }
}

const deleteItemAction = (id) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((jsonResponse) => jsonResponse.json())
            .then((res) => {
                dispatch({
                    type: 'DELETE_ITEM',
                    payload: id
                })
            })
            .catch(err => { if (err) console.log(err) })
    }
}

export { addItemAction, getItemsAction, editItemsAction, deleteItemAction }