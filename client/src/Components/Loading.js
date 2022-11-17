import React from "react";

const Loading = () => {
  const params = (new URL(document.location)).searchParams;

  const getValidation = async () => {
    const res = await axios(options);
    axios.get('/auth', params)
    console.log(res);

  };
  return <>Loading...</>;
};

export default Loading;
