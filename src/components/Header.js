import React from 'react';

function Header() {

  const heading = {
    textAlign: "center",
    fontSize: "40px",
    fontFamily: 'Kaushan Script',
  }

  return (
    <React.Fragment>
      <h1 style={heading}>Green Tea shop</h1>
      <h2 style={heading}>Available Teas</h2>
    </React.Fragment>
  )
}

export default Header