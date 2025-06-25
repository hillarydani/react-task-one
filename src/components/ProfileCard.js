// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
