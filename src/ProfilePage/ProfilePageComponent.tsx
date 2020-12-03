import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailUserRequest } from '../store/user/action';
import { ProfileWrapperStyled } from './ProfilePageStyled';

const ProfilePageComponent = (): ReactElement => {
    const dispatch = useDispatch()
    const userParams = 1
    const { user, isLoading } = useSelector((state: any) => state.user)
    const [isToggleUserInfo, setIsToggleUserInfo] = useState(false)

    useEffect(() => {
        dispatch(getDetailUserRequest(userParams))
    }, [dispatch])

    return (
        <ProfileWrapperStyled isToggleUserInfo={isToggleUserInfo}>
            <div>Profile Page</div>
            <div>Name: {user?.name}</div>
            <div>Email: {user?.email}<span className="profile-detail-toggle" onClick={(e) => {
                e.stopPropagation()
                setIsToggleUserInfo(!isToggleUserInfo)
            }}>^</span></div>
        </ProfileWrapperStyled>
    )
}

export default ProfilePageComponent