import React from 'react';
import { AvatarStyles } from './AvatarStyles';

export default function Avatar({ img }) {
  return <AvatarStyles><img src={img} alt="Logo" /></AvatarStyles>;
}
