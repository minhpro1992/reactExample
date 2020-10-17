import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostRequest, deletePostRequest } from '../store/post/action'

const TodoComponent = (props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostRequest({
            limit: 10,
            offset: 0
        }))
    }, [dispatch])
    const { posts, isLoading, error } = useSelector((state: any) => state.post)
    console.log('post: ', posts?.length, isLoading, error)
    return (
        <>
            <div>Todo List: {posts?.length}</div>
            {
                _.map(posts, (post, postIndex) => (
                    <div className="flex" key={postIndex}>
                        <div>{post.title}</div>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            dispatch(deletePostRequest(post?.id))
                        }}>Delete</button>
                    </div>
                ))
            }
        </>
    )
} 

export default TodoComponent