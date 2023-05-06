import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyUser } from "../data/users";

const LoginPage = () => {

  const [LoginDetails, setLoginDetails] = useState({
    employeeId: "",
    password: "",
    isFailedLogin: false,
    isRememberMe: false
  })

  const navigate = useNavigate();

  const handleLogin = (): void => {
    // send login request to backend
    // if fail, display invalid login credentials message
    // if success, navigate to /ListClaims

    // DUMMY VALIDATION
    if (LoginDetails.employeeId == dummyUser.EmployeeID) { 
      console.log("Login Success!");
      navigate("/ListClaims");
    } else {
      console.log("Login failed!!");
      setLoginDetails((prev) => ({
        ...prev,
        isFailedLogin: true
      }));
    }

    /*
    axios.get(...url, LoginDetails).then(() => {
      
    })
    */


    // navigate("/ListClaims");
  }

  const handleEmployeeIdInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const newEmployeeIdValue = event.currentTarget.value;
    setLoginDetails((prev) => ({
      ...prev,
      employeeId: newEmployeeIdValue
    }));
  }

  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const newPasswordValue = event.currentTarget.value;
    setLoginDetails((prev) => ({
      ...prev,
      password: newPasswordValue
    }));
  }

  const renderInvalid = () => {
    if (LoginDetails.isFailedLogin) {
      return <p>Invalid username or password!</p>;
    }
    return null;
  }

  const toggleRememberMe = () => {
    setLoginDetails((prev) => ({
      ...prev,
      isRememberMe: !LoginDetails.isRememberMe
    }));
  }

  return (
    <div>
      <h1>Login To DBS Portal</h1>
      <div>
        <div>
          <label>Employee Id:</label>
          <input type="text" name="employeeId" placeholder="Employee ID" onChange={(event) => handleEmployeeIdInput(event)}></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={(event) => handlePasswordInput(event)}></input>
        </div>
        <div>
          <input type="checkbox" name="RememberMe" checked={LoginDetails.isRememberMe} onChange={toggleRememberMe}/>
          <label htmlFor="RememberMe">Remember me</label>
        </div>
        <button onClick={() => handleLogin()}>Login</button>
        <div>{renderInvalid()}</div>
      </div>
    </div>
  )
}

export default LoginPage