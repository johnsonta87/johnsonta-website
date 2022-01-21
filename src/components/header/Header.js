import React from 'react';
import { HeaderStyles } from './HeaderStyles';

export default function Header({ center, children }) {
  return <HeaderStyles center={center}>{children}</HeaderStyles>;
}
