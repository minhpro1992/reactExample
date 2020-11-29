import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailUserRequest } from '../store/user/action';

const ProfilePageComponent = (): ReactElement => {
    const dispatch = useDispatch()
    const userParams = 1
    const { user, isLoading } = useSelector((state: any) => state.user)

    useEffect(() => {
        dispatch(getDetailUserRequest(userParams))
    }, [dispatch])

    return (
        <>
            <div>Profile Page</div>
            <div>Name: {user?.name}</div>
            <div>Email: {user?.email}<span>v</span></div>
        </>
    )
}

export default ProfilePageComponent