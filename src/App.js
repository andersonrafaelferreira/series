import React, { useState, useEffect } from 'react';
import { Navbar,
Collapse,
NavbarBrand,
Nav,
NavItem,
NavLink,
NavbarToggler
 } from 'reactstrap'

 import axios from 'axios'

function App() {

  const [data, setData] =useState({});

  useEffect(() => {
    axios.get('/api/genres')
      .then(data => {
        console.log(data.data)
        setData(data.data)
      })
  }, [])

  return (
    <div>
      <h1>rafaelyarn add { JSON.stringify(data) }</h1>
    </div>
  );
}

export default App;
