import React from "react";
import EditClaimModal from "../components/modals/EditClaimModal";
import Header from "./Header";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import projectExpenseClaims, { ProjectExpenseClaim } from '../data/projectExpenseClaims';
import { useState, useEffect, } from 'react';
import Button from 'react';

import { Table } from "antd";

const ListClaims = () => {

  // const [claims, setClaims] = useState([]);

  const claims = projectExpenseClaims;

  // useEffect(() => {
  //   const getClaims = () => {
  //     const currentClaims = projectExpenseClaims;
  //     // currentClaims.forEach((claim) => {
  //     //   setClaims((row) => [
  //     //     ...row,
  //     //   ]);
  //     // });
  //     setClaims(currentClaims);
  //     console.log(claims)
  //   };

  //   getClaims();
  // }, []);


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
      render: (text:string, record:ProjectExpenseClaim) => <><EditClaimModal currentClaim={record} /><button>Delete</button></>,
    },
  ]
  
  return (
    
    <div>
      <Header></Header>
      <Table columns={column} dataSource={claims} />;
    </div>
  )
}

export default ListClaims;
