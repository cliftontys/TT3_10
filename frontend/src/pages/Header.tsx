import React, {useContext} from 'react'
import AddClaimModal from "../components/modals/AddClaimModal";
import { Layout, Space, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom"
import UserContext from '../context/UserContext';

const Header = () => {
  const { Header } = Layout;

  const {jwt, setJwt} = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
    alert("You have logged out of the application.");
    setJwt(undefined);
  }

  return (
    <Header
      style={{
        color: "#fff",
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h3>List of Claims</h3>
      <div style={{ display: "flex", gap: 5 }}>
        <AddClaimModal />
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </Header>
  );
};

export default Header;
