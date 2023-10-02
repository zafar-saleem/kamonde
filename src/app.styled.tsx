import styled from "styled-components";

export const Main = styled.main`
  max-width: ${props => props.theme.breakpoints.l};
  margin: auto;
  padding-top: ${props => props.theme.tokens.gutter.gutter300};
`;
