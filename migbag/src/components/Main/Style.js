import styled from "styled-components";
import ham from "../../assets/img/ham.svg"

export const Slide = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const ChallengeLayout = styled.div`
  width: 100%;
  max-width: 355px;

  height: 100%;
  max-height: 500px;
`;
export const ChallengeBox = styled.div`
  width: 100%;
  max-width: 355px;

  height: 100px;

  box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SlideImg = styled.img`
  background-image: url(${ham});
  background-size: 100%;
`;

export const SlideText = styled.p`
  
`