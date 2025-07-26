import React from 'react';
import s from './Friends.module.css'


export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}