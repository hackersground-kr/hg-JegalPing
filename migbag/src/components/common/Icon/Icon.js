import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const Icon = ({ src, size = 24 }) => {
  return <StyledIcon src={src} size={size} />;
};

export default Icon;