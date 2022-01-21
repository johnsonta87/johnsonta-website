import styled from 'styled-components';

export const SectionStyles = styled.div`
  padding-bottom: 3em;
  margin-bottom: 3em;
  border-bottom: 1px solid ${props => props.theme.uiGold};

  .contact-info {
    margin-top: 2em;

    ul {
      margin: 0;
    }

    @media screen and (min-width: 640px) {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }
`;
