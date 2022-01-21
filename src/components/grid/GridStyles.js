import styled, { css } from 'styled-components';

export const GridStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  grid-gap: 2em;
`;

export const GridItemStyles = styled.li`
  strong {
    display: block;
    margin-bottom: 0.35em;
  }

  p {
    color: ${props => props.theme.uiGrey};
  }
`;
