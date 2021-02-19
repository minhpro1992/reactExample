import { testRender } from "../test";
import ProfilePageComponent from "./ProfilePageComponent";
import { screen } from "@testing-library/dom";
import React from "react";
import * as redux from "react-redux";
import { GET_DETAIL_USER_REQUEST } from "../store/user/types";
import { getDetailUserRequest } from "../store/user/action";

describe("<ProfilePage/>", () => {
  it("should render Profile Page not crashing", () => {
    jest.useFakeTimers();
    testRender(<ProfilePageComponent />);
    setTimeout(() => {
      expect(screen.getByText("Profile Page")).toBeTruthy();
    }, 1000);
    jest.runAllTimers();
  });
  it("load user state in Profile Page Component", () => {
    const mockUser = {
      id: 1,
      username: "",
    };
    const userSelectorSpy = jest.spyOn(redux, "useSelector");
    userSelectorSpy.mockReturnValue(mockUser);
    testRender(<ProfilePageComponent />);
    expect(userSelectorSpy).toHaveBeenCalled();
  });
  it("call api to get detail user", () => {
    const mockUser = {
      id: 1,
      username: "",
    };
    const userSelectorSpy = jest.spyOn(redux, "useSelector");
    userSelectorSpy.mockReturnValue(mockUser);
    const mockDispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    useDispatchSpy.mockReturnValue(mockDispatch);
    const expectedAction = {
      type: GET_DETAIL_USER_REQUEST,
      payload: mockUser.id,
    };
    const detailUserAction = mockDispatch(getDetailUserRequest(mockUser.id));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(detailUserAction).toEqual(mockDispatch(expectedAction));
    useDispatchSpy.mockClear();
  });
});
