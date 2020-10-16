import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostRequest } from '../store/post/action'

const TodoComponent = (props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostRequest({
            limit: 10,
            offset: 0
        }))
    }, [dispatch])
    const { posts, isLoading, error } = useSelector((state: any) => state.post)
    console.log('post: ', posts, isLoading, error)
    return (
        <>
            <div>Todo List</div>
            {
                _.map(posts, (post, postIndex) => (
                    <div className="flex" index={postIndex}>
                        <div>{post.title}</div>
                        <button>Delete</button>
                    </div>
                ))
            }
        </>
    )
} 

export default TodoComponent