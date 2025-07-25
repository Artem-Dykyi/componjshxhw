import React from 'react';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
    <li className="item">
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}