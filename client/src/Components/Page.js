import React, { useState } from "react";
import { useEffect } from "react";

const Page = () => {
  const [verified, setVerified] = useState();

  useEffect(() => {});
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
