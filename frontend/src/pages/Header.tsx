import React from 'react'
import AddClaimModal from "../components/modals/AddClaimModal";
import { Layout, Space, Menu, Button } from "antd";

const Header = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    TextAlign: 'right',
    color: '#fff',
    height: 50,
    paddingInline: 50,
    lineHeight: '50px',
  };

  return (
    <Header style={headerStyle}>
        <h3>List of Claims<Button style={{float:'right', marginTop:10}}>Logout</Button></h3>
        
        <div style={{float:"left"}}><AddClaimModal /></div>
    </Header>
  )
}

export default Header