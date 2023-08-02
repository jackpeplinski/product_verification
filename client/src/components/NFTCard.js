import React from 'react';
import '../styles/NFTCard.css';
import wallet_img from '../assets/blue_wallet.jpg';

const NFTCard = ({ details }) => {
  {
    /* <p>{details.description}</p>
  <h3>NFT Name</h3>
  <p>{details.nftName}</p> */
  }

  return (
    <div className='card_container'>
      <img className='artwork' src={wallet_img} />
      <h3 className='heading'>Louis Vuitton Wallet #905</h3>
      <p className='description'>
        Louis Vuitton's classic Pocket Organizer joins the LV Aerogram line with
        this version in soft, supple cowhide dyed an elegant shade of cobalt.
      </p>
      <p className='wallet-address'>{details.ownerWallet}</p>
      <p className='authentication-house'>{details.clientName}</p>
    </div>
  );
};

export default NFTCard;
