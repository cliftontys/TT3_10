import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyUser } from "../data/users";
import {Button, Checkbox} from 'antd';
import "./LoginPage.css";
import DBSLogo from "../assets/cdnlogo.com_dbs-bank.svg";

const LoginPage = () => {

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [isFailedLogin, setIsFailedLogin] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (): void => {
    // send login request to backend
    // if fail, display invalid login credentials message
    // if success, navigate to /ListClaims

    // DUMMY VALIDATION
    if (employeeId === dummyUser.EmployeeID) { 
      console.log("Login Success!");
      navigate("/ListClaims");
    } else {
      console.log("Login failed!!");
      setIsFailedLogin(true);
    }

    /*
    axios.get(...url, LoginDetails).then(() => {
      
    })
    */


    // navigate("/ListClaims");
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
    <div className="LoginPage">
      <div className="header">
        <img src={DBSLogo}/>
        <h1>Login To DBS Portal</h1>
      </div>
      <div className="InpuFieldsWrapper">
        <div className="InputFields">
          <div>
            <label>Employee Id:</label>
            <input type="text" name="employeeId" placeholder="Employee ID" onChange={(event) => handleEmployeeIdInput(event)}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" onChange={(event) => handlePasswordInput(event)}></input>
          </div>
          <div>
            <Checkbox name="RememberMe" checked={isRememberMe} onChange={toggleRememberMe}/>
            <label htmlFor="RememberMe">Remember me</label>
          </div>
          <Button type="primary" onClick={() => handleLogin()}>Login</Button>
          <div>{renderInvalid()}</div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage