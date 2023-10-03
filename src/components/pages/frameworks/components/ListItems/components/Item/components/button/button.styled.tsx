import styled, { css } from "styled-components";
import { IButton } from "./interfaces";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const hover = css`
  @media (hover: hover) {
    &:hover {
      transform: scale3d(1.5, 1.5, 1.5)
    }
  }

  &:active {
    transform: scale3d(1.2, 1.2, 1.2);
    opacity: 0.6;
  }
`;

export const Button = styled.button<IButton>`
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  transition: all 0.3s;

  ${props => props.type === "likes" && hover};
`;

export const Likes = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

export const Views = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;
