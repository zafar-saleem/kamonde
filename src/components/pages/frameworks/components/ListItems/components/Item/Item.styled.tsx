import { styled } from "styled-components";

export const ListItem = styled.li`
  padding: ${props => props.theme.tokens.gutter.gutter100};
  background-color: #ffffff;
  transition: all 0.5s;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 5px 5px ${props => props.theme.tokens.colors.neutrals.neutral200};
    }
  }
`;

export const Avatar = styled.span<{ color?: string; }>`
  display: block;
  margin: 0 auto;
  width: 70px;
  // text-align: center;
  background: ${props => { return props.color}};
  color: #ffffff;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  border-radius: 5rem;
`;

export const Title = styled.h1`
  text-align: center;
`;
