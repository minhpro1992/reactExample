import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store/configureStore";
import { getDetailUserRequest } from "../store/user/action";
import { ProfileWrapperStyled } from "./ProfilePageStyled";
import _ from "lodash";
import { UserState } from "../store/user/types";

const ProfilePageComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const userParams = 1;
  const { user } = useSelector<ApplicationState, UserState>(
    (state) => state.user
  );
  const [isToggleUserInfo, setIsToggleUserInfo] = useState(false);

  useEffect(() => {
    dispatch(getDetailUserRequest(userParams));
  }, [dispatch]);

  return (
    <ProfileWrapperStyled isToggleUserInfo={isToggleUserInfo}>
      <div>Profile Page</div>
      <div>Name: {!_.isEmpty(user) && user.name}</div>
      <div>
        Email: {!_.isEmpty(user) && user.email}
        <span
          className="profile-detail-toggle"
          onClick={(e) => {
            e.stopPropagation();
            setIsToggleUserInfo(!isToggleUserInfo);
          }}
        >
          ^
        </span>
      </div>
    </ProfileWrapperStyled>
  );
};

export default ProfilePageComponent;
