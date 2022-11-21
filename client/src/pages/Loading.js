import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "../components/LoadingComponent";
import CircularProgress from "@mui/material/CircularProgress";

const contract_address_temp = "0x6fa9f4b50e2950a8137a76649193816fb29dad2c";
const token_id_temp = "7981";
const url = require("url");

const Loading = () => {
  // parse window here into base + query parameters
  const [isLoading, setLoading] = useState(true);
  const [isVerified, setVerified] = useState(false);
  const [nftData, setNftData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getValidation();
  }, []);

  // parse window here into base + query parameters
  const getValidation = async () => {
    // get inital nfc query params
    const cur_url = url.parse(window.location.href, true);

    // use params to call our backend + assign verified status
    const res = await axios.get("https://vla-api.vercel.app/api/auth", {
      params: cur_url.query,
    });
    setVerified(res.data);

    // for testing
    // const res = await new Promise((res) =>
    //   setTimeout(() => res({ data: true }), 2000)
    // );
    setVerified(res.data);

    // chain the call to get nft details
    res.data ? getDetails() : setLoading(false);
  };

  // use async fn to request nft details
  const getDetails = async () => {
    // this will need to get passed by the NFC metadata
    const contract_address = contract_address_temp;
    const token_id = token_id_temp;

    // build request url
    const url = `https://vla-api.vercel.app/api/details/${contract_address}/${token_id}`;

    // get request from express backend
    const res = await axios.get(url);

    // For testing
    // const res = await new Promise((res) =>
    //   setTimeout(
    //     () =>
    //       res({
    //         data: {
    //           details: "details",
    //           owner_wallet: "owner_wallet",
    //         },
    //       }),
    //     2000
    //   )
    // );

    setNftData(res.data);
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div style={{ margin: "10% 25vw" }}>
          <CircularProgress sx={{ color: "#7AC141" }} />
        </div>
      ) : isVerified ? (
        navigate("/authenicated", { state: nftData })
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Loading;
