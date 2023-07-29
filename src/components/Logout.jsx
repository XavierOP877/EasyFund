import React from 'react';

const Logout = () => {
  const logout = () => {
    if (window.ethereum) {
      window.ethereum.selectedAddress = null;
    }
  }

  return (
    <button onClick={logout}>Logout from Metamask</button>
  )
}

export default Logout;