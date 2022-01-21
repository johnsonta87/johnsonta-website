import styled from 'styled-components';

export const AvatarStyles = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition-delay: 500ms;
  }
`;
