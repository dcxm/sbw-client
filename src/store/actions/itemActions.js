const getItemsAction = (dispatch) => {
    fetch(`${process.env.API_URL}/items`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    }).then(res => res.json())
        .then(parsedRes => dispatch({
            type: 'GET_ITEMS',
            payload: parsedRes
        }))
        .catch(err => { if (err) console.log(err) })
}

export { getItemsAction }