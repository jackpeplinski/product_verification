import axios from 'axios';

const authorization = '45c480d6-842e-42a3-9258-63a3efa6d05d';

// map walletAddress : clientName
let mockDB = {
  '0x964937a0afdd89569c87c582f83e881c1b036486': 'Verfied Seller A',
};

const authorizeTag = async (q_params) => {
  // send the request to seritag for verification
  let res = await axios.get(`https://api.ixkio.com/v1/t`, q_params);

  // parse the response
  let { xuid, response } = res.data;

  let isVerified = false;
  response == 'Pass' ? (isVerified = true) : null;

  // this should set a global state for the page
  return true;
};

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

export { authorizeTag, getNFTMetadata, getTransactionDetails };
