import React from 'react';
import {FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};