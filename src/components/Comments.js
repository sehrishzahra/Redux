
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { StoreData, addComment, DelComment, clearComment } from '../actions/index'

export default function Comments() {
    const dispatch = useDispatch()
    const myResult = useSelector(state => state.DataReducer.data)
    console.log(myResult)
    // const [data, setData] = useState([])
    const [inputData, setInputData] = useState('')

    const getData = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/comments')
            const myData = res.data.slice(0, 6)
            // setData(myData)
            dispatch(StoreData(myData))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className="main">
                <h1 className='heading'>Comments</h1>
                <div className="input">
                    <textarea
                        type="text"
                        name=""
                        placeholder='Add Comment'
                        id="" value={inputData}
                        onChange={(event) => setInputData(event.target.value)} />
                    <div className="btn-container">
                        <button className='btn-add btn' onClick={() => { dispatch(addComment(inputData)); setInputData('') }}>Add</button>
                        <button className='btn' onClick={() => dispatch(clearComment())} >Clear All</button>
                    </div>
                </div>
                <div className="container" >
                    {myResult.map((item) => (
                        <div className="inner-div" key={item.id}>
                            <p className='content'>{item.name}</p>
                            <button className='btn-del btn' onClick={() => dispatch(DelComment(item.id))}>Delete</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
