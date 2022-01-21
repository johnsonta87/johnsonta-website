import React from 'react';
import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return <FooterStyles>
    <div className="footer-links">
      <p>Find me on &nbsp;
        <a href="https://twitter.com/JNSN_" target="_blank" rel="noreferrer">Twitter</a>, &nbsp;
        <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">Github</a></p>
    </div>
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} Built with Create React App + deployed with Netlify</p>
    </div>
  </FooterStyles>;
}
