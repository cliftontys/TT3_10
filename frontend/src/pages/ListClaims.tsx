import React from "react";
import AddClaimModal from "../components/modals/AddClaimModal";
import EditClaimModal from "../components/modals/EditClaimModal";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import projectExpenseClaims from '../data/projectExpenseClaims';
import { useState, useEffect, } from 'react';
import Button from 'react';

const ListClaims = () => {

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const getClaims = () => {
      const currentClaims = projectExpenseClaims;
      currentClaims.forEach((claim) => {
        setClaims((row) => [
          ...row,
        ]);
      });
      console.log(currentClaims)
    };

    getClaims();
  }, []);

  const renderEditButton = () => {
    return (
        <strong>
            <button
                color="primary"
                style={{ marginLeft: 16 }}
              >
                Edit
            </button>
            <button
                color="primary"
                style={{ marginLeft: 16 }}
              >
                Delete
            </button>
        </strong>
    )
}
  

  const columns: GridColDef[] = [
    { field: 'ClaimID', headerName: 'Claim ID', width: 150 },
    { field: 'ProjectID', headerName: 'Project ID', width: 150 },
    { field: 'CurrencyID', headerName: 'Currency', width: 150 },
    { field: 'Amount', headerName: 'Amount', width: 150 },
    { field: 'Purpose', headerName: 'Purpose', width: 150 },
    { field: 'LastEditedClaimDate', headerName: 'Last Edited Claim Date', width: 200 },
    { field: 'Status', headerName: 'Status', width: 150 },
    { field: 'Actions',headerName: 'Actions', width: 150, renderCell: renderEditButton},
  ];

  return (
    
    <div>
      <AddClaimModal />
      <EditClaimModal currentClaim={projectExpenseClaims[0]} />
      <DataGrid className="listClaims" 
      rows={projectExpenseClaims} 
      columns={columns} 
      getRowId={(row) => Number(row.ClaimID)} 
      pageSizeOptions={[5, 10]}/>
    </div>
  )
}

export default ListClaims;
