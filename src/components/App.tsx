import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';

const App = () => {
  const [token, setToken] = useState('');

  const getServerRes = () => {
    axios.get('/token')
      .then(res => {
        setToken(res.data)
        console.log(token);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getServerRes();
  }, []);

  return (
    <div>
      <h1>Smart Ass 2021</h1>
      <Home />
    </div>
  )
};

export default App;
