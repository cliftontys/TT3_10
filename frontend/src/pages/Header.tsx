import React from 'react'
import AddClaimModal from "../components/modals/AddClaimModal";

const Header = () => {
  return (
    <div className='header'>
        <h3>Welcome</h3>
        <AddClaimModal/>
    </div>
  )
}

export default Header