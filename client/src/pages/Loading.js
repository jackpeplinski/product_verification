import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loading = () => {
  // // parse window here into base + query parameters
  const [isVerified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getValidation();
  }, []);

  // parse window here into base + query parameters
  const getValidation = async () => {
    // get inital nfc query params
    const q_params = new URL(document.location).searchParams;

    // use params to call our backend + assign verified status
    const res = await axios.get('/auth', q_params);
    setVerified(res.data);
  };

  return <>{isVerified ? navigate('/authenicated') : <h1>Loading...</h1>}</>;
};

export default Loading;
