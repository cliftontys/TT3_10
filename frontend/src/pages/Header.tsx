import React, {useContext} from 'react'
import AddClaimModal from "../components/modals/AddClaimModal";
import { Layout, Space, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom"
import UserContext from '../context/UserContext';

const Header = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    TextAlign: 'right',
    color: '#fff',
    height: 50,
    paddingInline: 50,
    lineHeight: '50px',
  };

  const {jwt, setJwt} = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
    alert("You have logged out of the application.");
    setJwt(undefined);
  }

  return (
    <Header style={headerStyle}>
        <h3>List of Claims<Button onClick={handleLogout} style={{float:'right', marginTop:10}}>Logout</Button></h3>
        
        <div style={{float:"left"}}><AddClaimModal /></div>
    </Header>
  )
}

export default Header