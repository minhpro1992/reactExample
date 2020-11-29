import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailUserFail } from '../store/user/action';

const ProfilePageComponent = (): ReactElement => {
    const dispatch = useDispatch()
    const userParams = { userId: 1}
    
    useEffect(()=> {
        dispatch(getDetailUserFail(userParams))
    }, [dispatch])

    return (
        <div>Profile Page</div>
    )
}

export default ProfilePageComponent