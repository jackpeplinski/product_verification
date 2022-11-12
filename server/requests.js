import axios from 'axios';

const authorization = '45c480d6-842e-42a3-9258-63a3efa6d05d';
const contract_address_temp = '0x6fa9f4b50e2950a8137a76649193816fb29dad2c';
const token_id_temp = '7981';

const getNFTDetails = async (contract_address, token_id) => {
  // temp assignment of constants
  contract_address = contract_address_temp;
  token_id = token_id_temp;

  // set the get request options with required details
  const options = {
    method: 'GET',
    url: `https://api.nftport.xyz/v0/nfts/${contract_address}/${token_id}`,
    params: { chain: 'ethereum' },
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  // await the response and data from axois request
  const res = await axios.request(options);
  const data = await res;
};
