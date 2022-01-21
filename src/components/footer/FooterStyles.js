import styled from 'styled-components';

export const FooterStyles = styled.footer`
  font-family: Piazzolla,serif;
  color: ${props => props.theme.uiWhite};
  margin-top: 25px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .footer-links {
    flex: 1 1 auto;
  }

  .footer-links,
  .footer-copyright {
    > * {
      font-size: 0.85rem;
      margin: 0;
      color: ${props => props.theme.uiWhite};
    }
  }
`;
