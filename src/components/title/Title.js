import React from 'react';
import { TitleStyles } from './TitleStyles';

export default function Title({ content, bold }) {
  return <TitleStyles bold={bold}>{content}</TitleStyles>;
}
