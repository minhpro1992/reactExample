import React from "react";
import { OrderComponent } from ".";
import { testRender } from "../test";
import { screen } from "@testing-library/dom";
import * as redux from "react-redux";

describe("<OrderComponent />", () => {
  it("shoud render Order page not crashing", () => {
    jest.useFakeTimers();
    testRender(<OrderComponent />);
    setTimeout(() => {
      expect(screen.getByText("Order Page")).toBeTruthy();
    }, 1000);
    jest.runAllTimers();
  });
  it("load login state in Order component", () => {
    const login = {
      isLoading: false,
      username: "",
      token: "",
      error: "",
    };
    const loginSelectorSpy = jest.spyOn(redux, "useSelector");
    loginSelectorSpy.mockReturnValue(login);
    testRender(<OrderComponent />);
    expect(loginSelectorSpy).toHaveBeenCalled();
    expect(screen.getByText("Order Page")).toBeTruthy();
  });
});
