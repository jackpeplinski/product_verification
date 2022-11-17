import {
  getNFTMetadata,
  getTransactionDetails,
  authorizeTag,
} from "./requests.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set up application to use proxy server
export const app = express();
app.use(cors());
app.use(express.json()); //allow use to parse body of req
app.use(express.static(path.join(__dirname, "/../client/build")));

const port = process.env.PORT || 3001;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

//load homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

// This will return the details of the associated NFT
app.get("/details/:contract_address/:token_id", async (req, res) => {
  const { contract_address, token_id } = req.params;

  // get both the metadata and transaction history to display to user
  const metadata = await getNFTMetadata(contract_address, token_id);
  const clientName = await getTransactionDetails(contract_address, token_id);

  // destructure metadata
  const { animation_url, attributes, description, image, name } =
    metadata.details;

  //return the combined JSON data to frontend
  const nftDetails = {
    animation_url: animation_url,
    image: image,
    attributes: attributes,
    description: description,
    nftName: name,
    ownerWallet: metadata.owner_wallet,
    clientName: clientName,
  };

  res.send(nftDetails);
});

// this will return the verification status of the NFC tag
app.get("/auth", async (req, res) => {
  // let's make the request to get the tag status
  const isAuthorized = await authorizeTag(req.query);

  res.send(isAuthorized);
});
