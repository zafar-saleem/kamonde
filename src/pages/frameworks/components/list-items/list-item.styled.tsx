import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    grid-template-columns: 1fr;
  }
`;
