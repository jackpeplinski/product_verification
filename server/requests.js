import axios from 'axios';

const authorization = '45c480d6-842e-42a3-9258-63a3efa6d05d';
const contract_address_temp = '0x6fa9f4b50e2950a8137a76649193816fb29dad2c';
const token_id_temp = '7981';

// map walletAddress : clientName
mockDB = {
  '0x964937a0afdd89569c87c582f83e881c1b036486': 'Verfied Seller A',
};

const getNFTDetails = async (contract_address, token_id) => {
  // temp assignment of constants
  contract_address = contract_address_temp;
  token_id = token_id_temp;

  // get both the metadata and transaction history to display to user
  let metadata = await getNFTMetadata(contract_address, token_id);
  let clientName = await getTransactionDetails(contract_address, token_id);

  //return the combined JSON data to frontend
  const nftDetails = {
    metadata: metadata,
    clientName: clientName,
  };

  console.log(nftDetails);

  return nftDetails;
};

const getNFTMetadata = async (contract_address, token_id) => {
  // set the get request options with required details
  const details_options = {
    method: 'GET',
    url: `https://api.nftport.xyz/v0/nfts/${contract_address}/${token_id}`,
    params: { chain: 'ethereum' },
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  // await the response and data from axois request
  let res = await axios.request(details_options);
  let data = res.data;

  // return metadata from data object
  let metadata = data.metadata;
  let owner_wallet = data.owner;

  return {
    metadata: metadata,
    owner_wallet: owner_wallet,
  };
};

const getTransactionDetails = async (contract_address, token_id) => {
  // we will mint the NFT  token and make the first transfer to the client
  const transfer_options = {
    method: 'GET',
    url: `https://api.nftport.xyz/v0/transactions/nfts/${contract_address}/${token_id}`,
    params: { chain: 'ethereum', type: 'transfer' },
    headers: {
      'Content-Type': 'application/json',
      Authorization: '45c480d6-842e-42a3-9258-63a3efa6d05d',
    },
  };

  // await the response and data from axois request
  let res = await axios.request(details_options);
  let data = res.data;

  // find the first transaction to get client wallet address
  let firstTransaction = data.transactions.pop();
  let clientName = mockDB[firstTransaction.transfer_to];

  return {
    clientName: clientName,
  };
};
