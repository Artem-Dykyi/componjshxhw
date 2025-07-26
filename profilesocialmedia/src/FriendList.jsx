import React from 'react';
import {FriendItem } from './FriendItem';
import s from './Friends.module.css'

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
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