import {
  getNFTMetadata,
  getTransactionDetails,
  authorizeTag,
} from './requests.js';

import express from 'express';
import cors from 'cors';

// set up application to use proxy server
const app = express();
app.use(cors());
app.use(express.json()); //allow use to parse body of req

const port = process.env.PORT || 3001;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

//load homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

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

// this will return the verification status of the NFC tag
app.get('/auth', async (req, res) => {
  const { x, n, e } = req.query;

  // let's make the request to get the tag status
  let isAuthorized = await authorizeTag(x, n, e);

  res.send(isAuthorized);
});
