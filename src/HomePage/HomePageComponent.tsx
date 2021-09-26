import { Button } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { connect } from "react-redux";
import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  withRouter,
} from "react-router-dom";
import { MapComponent } from "../Map";
import { OrderComponent } from "../Order";
import { ProfilePageComponent } from "../ProfilePage";
import { TodoComponent } from "../Todo";
import {
  MainContentWrapperStyled,
  SideBarWrapperStyled,
} from "./HomePageStyled";

const routes = [
  {
    path: "/map",
    component: <MapComponent />
  },
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
  },
];

const HomePageComponent = (): ReactElement => {
  const [isToggleSidebar, setIsToggleSideBar] = useState(false);
  const userInfo = localStorage.getItem("userInfo");
  const sideBarData = { isToggleSidebar };
  const history = useHistory();
  // const selectLogin = useMemo(
  //   (state: any) => state.login,
  //   {}
  // )
  // const loginSelector = useSelector(
  //   state => selectLogin(state)
  // )
  // console.log('token: ', loginSelector)
  if (!userInfo) {
    return <Redirect to="/login" />;
  }
  return (
    <div style={{ display: "flex" }}>
      <SideBarWrapperStyled {...sideBarData}>
        <div className="saga-menu-wrapper">
          <div
            className="saga-toggle-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsToggleSideBar(!isToggleSidebar);
            }}
          >
            x
          </div>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
            }}
          > 
          <li>
            <Link to="/map">Map</Link>
          </li>
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
                className="saga-logout-btn"
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
      </SideBarWrapperStyled>
      <MainContentWrapperStyled {...sideBarData}>
        <div className="saga-main-content-wrapper">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} children={route.component} />
            ))}
          </Switch>
        </div>
      </MainContentWrapperStyled>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps, null)(withRouter(HomePageComponent));
