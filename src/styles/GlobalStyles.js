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
    position: relative;
  }

  a {
    color: ${props => props.theme.uiGold};
    text-decoration: none;
  }

  ul, ol {
    margin-top: 1em;

    li {
      list-style: none;
    }
  }

  p {
    margin-bottom: 1em;

    &:last-of-type {
      margin: 0;
    }
  }

  p, li {
    font-family: ${props => props.theme.primaryFont};
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  strong {
    font-weight: bold;
  }

  h1, h2, h3, h4 {
    color: ${props => props.theme.uiGold};
    font-weight: bold;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
