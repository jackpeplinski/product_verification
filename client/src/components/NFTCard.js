import React from 'react';
import '../styles/NFTCard.css';

const NFTCard = ({ details }) => {
  return (
    <div className='card_container'>
      <h1 style={{ textAlign: 'center' }}>Louis Vuitton Purse</h1>
      <h3 style={{ textAlign: 'center' }}>{details.clientName}</h3>
      <img style={{ height: 150, width: 150 }} src={details.image} />
      <h3>OwnerWallet Address</h3>
      <p>{details.ownerWallet}</p>
      <h3>Description</h3>
      <p>{details.description}</p>
      <h3>NFT Name</h3>
      <p>{details.nftName}</p>
    </div>
  );
};

export default NFTCard;
