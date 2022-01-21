import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from './Reset'

const CustomStyles = createGlobalStyle`
  ${reset}
  @import url("https://fonts.googleapis.com/css2?family=Piazzolla&display=swap");

  body, html {
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  html {
    background: ${props => props.theme.uiBlack};
    color: #dfdfdf;
    height: 100%;
    position: relative;
    min-height: 100vh;
  }

  a {
    color: ${props => props.theme.uiGold};
    text-decoration: none;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  p, li {
    font-family: ${props => props.theme.primaryFont};
  }

  h1, h2, h3, h4 {
    color: ${props => props.theme.uiGold};
  }

`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
