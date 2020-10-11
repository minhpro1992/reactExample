import React, { ReactElement } from 'react';
import { Redirect, withRouter, Switch, Link, Route } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useSelector } from 'react-redux'
import { ProfilePageComponent } from "../ProfilePage";
import { OrderComponent } from "../Order";

const routes = [
    {
      path: "/order",
      component: <OrderComponent />,
    },
    {
      path: "/profile",
      component: <ProfilePageComponent />,
    },
  ];

const HomePageComponent = (props:any): ReactElement => {
    const userInfo = localStorage.getItem("userInfo");
    const { history } = props;
    // const loginSelector = useSelector((state: any) => state.login)
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

export default withRouter(HomePageComponent)