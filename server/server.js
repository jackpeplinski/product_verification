const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const axios = require('axios');
const authorization = '45c480d6-842e-42a3-9258-63a3efa6d05d';

// map walletAddress : clientName
mockDB = {
  '0x964937a0afdd89569c87c582f83e881c1b036486': 'Verfied Seller A',
};

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// This will return the details of the associated NFT
app.get('/details/:contract_address/:token_id', async (req, res) => {
  const { contract_address, token_id } = req.params;

  // get both the metadata and transaction history to display to user
  let metadata = await getNFTMetadata(contract_address, token_id);
  let clientName = await getTransactionDetails(contract_address, token_id);

  //return the combined JSON data to frontend
  const nftDetails = {
    metadata: metadata,
    clientName: clientName,
  };

  res.send(nftDetails);
});

const getNFTMetadata = async (contract_address, token_id) => {
  // set the get request options with required details
  let res = await axios.get(
    `https://api.nftport.xyz/v0/nfts/${contract_address}/${token_id}`,
    {
      params: { chain: 'ethereum' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    }
  );

  let data = res.data;

  // return metadata from data object
  let details = data.nft.metadata;
  let owner_wallet = data.owner;

  return {
    details: details,
    owner_wallet: owner_wallet,
  };
};

const getTransactionDetails = async (contract_address, token_id) => {
  // we will mint the NFT  token and make the first transfer to the client

  // await the response and data from axois request
  let res = await axios.get(
    `https://api.nftport.xyz/v0/transactions/nfts/${contract_address}/${token_id}`,
    {
      params: { chain: 'ethereum', type: 'transfer' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: '45c480d6-842e-42a3-9258-63a3efa6d05d',
      },
    }
  );

  let data = res.data;

  // find the first transaction to get client wallet address
  let firstTransaction = data.transactions.pop();
  let clientName = mockDB[firstTransaction.transfer_to];

  return clientName;
};
