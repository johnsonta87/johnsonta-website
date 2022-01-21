import styled, { css } from 'styled-components';

export const TitleStyles = styled.h1`
  font-size: 3rem;
  line-height: 1;
  ${props => props.bold && css`font-weight: bold;`};
`;
