import styled, { css } from 'styled-components';

export const HeaderStyles = styled.div`
    margin: 0 auto;
    ${props => props.center && css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    `};

  .sub-title {
    margin: 1rem auto;
    text-align: center;
  }
`;
