import React from "react";
import AddClaimModal from "../components/modals/AddClaimModal";
import { Layout, Button } from "antd";

const Header = () => {
  const { Header } = Layout;

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
        <Button>Logout</Button>
      </div>
    </Header>
  );
};

export default Header;
