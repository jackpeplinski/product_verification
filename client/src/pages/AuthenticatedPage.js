import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';
import NFTCard from '../components/NFTCard';

const AuthenticatedPage = () => {
  const { state } = useLocation();
  const [details, setDetails] = useState(state);
  const [isAnimating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>{isAnimating ? <LoadingComponent /> : <NFTCard details={details} />}</>
  );
};

export default AuthenticatedPage;
