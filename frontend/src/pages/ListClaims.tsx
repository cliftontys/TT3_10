import React from "react";
import EditClaimModal from "../components/modals/EditClaimModal";
import Header from "./Header";

import projectExpenseClaims, { ProjectExpenseClaim } from '../data/projectExpenseClaims';
import { useState, useEffect, } from 'react';

import { Table, Button } from "antd";

const ListClaims = () => {

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const getClaims = async () => {
      const claimsFromServer = await fetchClaims()
      setClaims(claimsFromServer)

      console.log("get claims", claimsFromServer)
    }

    getClaims()
  }, [])

  const fetchClaims = async () => {
    const res = await fetch(`http://localhost:5000/claims`);
    const data = await res.json();
    return data;
  }

  // const claims = projectExpenseClaims;

  const column = [
    { title: 'Claim ID', dataIndex: 'ClaimID', key:'ClaimID', width: 150 },
    { title: 'Project ID', dataIndex: 'ProjectID', key: 'ProjectID', width: 150 },
    { title: 'Currency ID', dataIndex: 'CurrencyID', key:'CurrencyID', width: 150 },
    { title: 'Amount', dataIndex: 'Amount', key:'Amount', width: 150 },
    { title: 'Purpose', dataIndex: 'Purpose', key:'Purpose', width: 150 },
    { title: 'Last Edited Claim Date', dataIndex: 'LastEditedClaimDate', key:'LastEditedClaimDate',width: 200 },
    { title: 'Status', dataIndex: 'Status', key:'Status', width: 150 },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
      width: 250,
      render: (text:string, record:ProjectExpenseClaim) => 
      <div style={{display:"flex", gap:5}}>
      <EditClaimModal currentClaim={record} />
      <Button type="primary" style={{backgroundColor:'red'}}>Delete</Button>
      </div>,
    },
  ]

  
  return (
    
    <div>
      <Header></Header>
      <Table className="listClaims" columns={column} dataSource={claims}  />;
    </div>
  )
}

export default ListClaims;
