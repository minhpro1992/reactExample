import { Button } from "@material-ui/core";
import React, { ReactElement, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { createSelector } from 'reselect'
import { OrderComponent } from "../Order";
import { ProfilePageComponent } from "../ProfilePage";
import { TodoComponent } from '../Todo';

const routes = [
  {
    path: "/order",
    component: <OrderComponent />,
  },
  {
    path: "/profile",
    component: <ProfilePageComponent />,
  },
  {
    path: "/todo",
    component: <TodoComponent />,
  }
];

const HomePageComponent = (props: any): ReactElement => {
  const userInfo = localStorage.getItem("userInfo");
  const { history, token } = props;
  // const selectLogin = useMemo(
  //   (state: any) => state.login,
  //   {}
  // )
  // const loginSelector = useSelector(
  //   state => selectLogin(state)
  // )
  // console.log('token: ', loginSelector)
  if (!userInfo) {
    return <Redirect to="/login" />
  }
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: 1,
          padding: "10px",
          background: "#f0f0f0",
          height: "100vh",
          position: "relative",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li style={{ position: "absolute", bottom: 40 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                localStorage.removeItem("userInfo");
                history.push("/login");
              }}
            >
              Logout
                </Button>
          </li>
        </ul>
      </div>

      <div
        style={{
          flex: 4,
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={route.component}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(withRouter(HomePageComponent))