import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch_success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'fetch_fail':
            return {
                loading: false,
                post: {},
                error: 'There is an error in fetching posts.'
            }
        default:
            return state;
    }
}


const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response)=>dispatch({type:'fetch_success', payload: response.data}))
            .catch((error)=>dispatch({type:'fetch_fail'}))
    }, [])

    return (
        <>
           {state.loading? 'loading': state.post.title }
            {state.error ? state.error : null}
        </>
    )
}

export default DataFetchingTwo