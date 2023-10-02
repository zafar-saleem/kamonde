import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  transition: all 0.3s;

  @media (hover: hover) {
    &:hover {
      transform: scale3d(1.5, 1.5, 1.5)
    }
  }

  &:active {
    transform: scale3d(1.2, 1.2, 1.2)
  }
`;

export const Likes = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

export const Views = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;
