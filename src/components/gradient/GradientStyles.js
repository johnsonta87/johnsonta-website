import styled from 'styled-components';

export const GradientContainer = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.uiBlack};
  background: linear-gradient(180deg,rgba(23,0,50,0) 20%, ${props => props.theme.uiPurple});
`;
