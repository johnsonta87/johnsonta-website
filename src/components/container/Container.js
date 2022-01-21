import React from 'react';
import { ContainerStyles } from './ContainerStyles';

export default function Container({children}) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
