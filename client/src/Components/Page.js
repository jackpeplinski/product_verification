import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const contract_address_temp = "0x6fa9f4b50e2950a8137a76649193816fb29dad2c";
const token_id_temp = "7981";

const Page = () => {
  const [details, setDetails] = useState([]);

  // on page load
  useEffect(() => {
    getDetails();
  }, []);

  // use async fn to request
  const getDetails = async () => {
    // this will need to get passed by the NFC metadata
    const contract_address = contract_address_temp;
    const token_id = token_id_temp;

    // set options
    const options = {
      method: "GET",
      url: `http://localhost:5000/details/${contract_address}/${token_id}`,
    };

    // get request from express backend
    const res = await axios(options);
    setDetails(res);
    console.log(details);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Louis Vuitton Purse</h1>
      <h3 style={{ textAlign: "center" }}>Verified Luxury Goods</h3>
      <img />
      <h3>Owner</h3>
      <p>0xNinjuhL</p>
      <h3>Description</h3>
      <p>
        Show your loyalty. A HAPEBADGE gives you early access to merchandise,
        events and more. Hold it close and stay HAPE.
      </p>
    </>
  );
};

export default Page;
