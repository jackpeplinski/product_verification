import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const contract_address_temp = '0x6fa9f4b50e2950a8137a76649193816fb29dad2c';
const token_id_temp = '7981';

const Page = () => {
  const [details, setDetails] = useState([]);

  // on page load
  useEffect(() => {
    // use query paramters her
    getDetails();
  }, []);

  // use async fn to request
  const getDetails = async () => {
    // this will need to get passed by the NFC metadata
    const contract_address = contract_address_temp;
    const token_id = token_id_temp;

    // build request url
    const url = `/details/${contract_address}/${token_id}`;

    // get request from express backend
    const res = await axios.get(url);
    setDetails(res.data);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Louis Vuitton Purse</h1>
      <h3 style={{ textAlign: 'center' }}>{details.clientName}</h3>
      <img style={{ height: 150, width: 150 }} src={details.image} />
      <h3>OwnerWallet Address</h3>
      <p>{details.ownerWallet}</p>
      <h3>Description</h3>
      <p>{details.description}</p>
      <h3>NFT Name</h3>
      <p>{details.nftName}</p>
    </>
  );
};

export default Page;
