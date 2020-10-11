import React, {
  ReactElement,
  useState,
  ChangeEvent,
  MouseEvent,
  useEffect,
} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, withRouter} from "react-router-dom";
import { loginRequest } from '../store/login/action'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LoginComponent = (props: any): ReactElement => {
    const { history } = props
  const classes = useStyles();
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    username: "",
    currentPassword: "",
  });
  const userInfoData = localStorage.getItem("userInfo");
  if (userInfoData) {
    return <Redirect to="/" />;
  }
  const handleChange = (fieldName: string) => (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const newUserInfo = Object.assign({}, userInfo, {
      [fieldName]: e.target.value,
    });
    setUserInfo(newUserInfo);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>Login Page</div>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          value={userInfo?.username}
          onChange={handleChange("username")}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="currentPassword">Password</InputLabel>
        <Input
          id="currentPassword"
          type="currentPassword"
          value={userInfo?.currentPassword}
          onChange={handleChange("currentPassword")}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={(e: MouseEvent): void => {
          dispatch(loginRequest({
            username: userInfo.username,
            pass: userInfo.currentPassword
          }))
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          history.push("/");
        }}
      >
        Login
      </Button>
    </form>
  );
};

export default withRouter(LoginComponent);
