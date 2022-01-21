import styled from 'styled-components';

export const FooterStyles = styled.footer`
  font-family: Piazzolla,serif;
  color: ${props => props.theme.uiWhite};
  margin-top: 25px;
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: space-between;
  -webkit-justify-content: justify;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  align-items: flex-end;

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
