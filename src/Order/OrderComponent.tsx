import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store/configureStore";
import { LoginState } from "../store/login/types";

const OrderComponent = (): ReactElement => {
  const loginSelector = useSelector<ApplicationState, LoginState>(
    (state) => state.login
  );
  console.log("loginSelector: ", loginSelector);
  return <div>Order Page</div>;
};

export default OrderComponent;
