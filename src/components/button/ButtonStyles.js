import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button`
  background-color: ${props => props.theme.uiPurple};
  border-color: ${props => props.theme.uiLightPurple};
  padding: 8px 16px;
  color: #ffb24f;
  background-color: ${props => props.theme.uiLightPurple};
  border: 2px solid ${props => props.theme.uiPurple};
  font-family: ${props => props.theme.primaryFont};
  transition: 0.2s all ease-in;
`;
