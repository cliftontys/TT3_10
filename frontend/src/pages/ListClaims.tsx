import React from "react";
import AddClaimModal from "../components/modals/AddClaimModal";
import EditClaimModal from "../components/modals/EditClaimModal";
import projectExpenseClaims from "../data/projectExpenseClaims";

const ListClaims = () => {
  return (
    <>
      <div>ListClaims</div>
      <AddClaimModal />
      <EditClaimModal currentClaim={projectExpenseClaims[0]} />
    </>
  );
};

export default ListClaims;
