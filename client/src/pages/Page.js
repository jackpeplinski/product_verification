import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";

const Page = () => {
  const { state } = useLocation();
  const [details, setDetails] = useState(state);

  return (
    <>
      <LoadingComponent />
      <h1 style={{ textAlign: "center" }}>Louis Vuitton Purse</h1>
      <h3 style={{ textAlign: "center" }}>{details.clientName}</h3>
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
