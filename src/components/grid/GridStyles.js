import styled from 'styled-components';

export const GridStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  grid-gap: 2em;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
