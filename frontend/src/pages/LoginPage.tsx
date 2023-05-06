import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, Checkbox, Form, Input} from 'antd';
import "./LoginPage.css";
import DBSLogo from "../assets/cdnlogo.com_dbs-bank.svg";
import UserContext from '../context/UserContext';

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFailedLogin, setIsFailedLogin] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const {jwt, setJwt} = useContext(UserContext);
  const navigate = useNavigate();

  // If user has cookie, redirect them immediately to dashboard
  // useEffect(() => {
  //   if (jwt) {
  //     navigate("/ListClaims");
  //   }
  // }, [])

  const handleLogin = async (): Promise<void> => {
    // send login request to backend
    // if fail, display invalid login credentials message
    // if success, navigate to /ListClaims
    try {
      const bodyToSend = JSON.stringify({
        ID: employeeId,
        Password: password
      });
      console.log(bodyToSend);
      await fetch("http://localhost:5000/", {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: bodyToSend
      }).then((response) => response.json()).then((response) => {
        console.log(response);
        if (response.code == 200) {
          setJwt(response.token);
          navigate("/ListClaims");
        } else {
          setIsFailedLogin(true);
        }
      })
    } catch (err) {
      console.log(err);
      alert("An unexpected error occurred! Please try again.");
    }
  }

  const handleEmployeeIdInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const newEmployeeIdValue = event.currentTarget.value;
    setEmployeeId(newEmployeeIdValue);
  }

  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const newPasswordValue = event.currentTarget.value;
    setPassword(newPasswordValue)
  }

  const renderInvalid = () => {
    if (isFailedLogin) {
      return <p>Invalid username or password!</p>;
    }
    return null;
  }

  const toggleRememberMe = () => {
    setIsRememberMe(!isRememberMe)
  }

  return (
    <Form className="LoginPage">
      <div className="LoginPageHeader">
        <img src={DBSLogo}/>
        <h1>Login To DBS Portal</h1>
      </div>
      <div className="InpuFieldsWrapper">
        <div className="InputFields">
          <Form.Item label="Employee Id">
            <Input onChange={(event) => handleEmployeeIdInput(event)}/>
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password onChange={(event) => handlePasswordInput(event)}/>
          </Form.Item>
          <div>
            <Checkbox name="RememberMe" checked={isRememberMe} onChange={toggleRememberMe}/>
            <label htmlFor="RememberMe">Remember me</label>
          </div>
          <Button type="primary" onClick={() => handleLogin()}>Login</Button>
          <div>{renderInvalid()}</div>
        </div>
      </div>
      
    </Form>
  )
}

export default LoginPage