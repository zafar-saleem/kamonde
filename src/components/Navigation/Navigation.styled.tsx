import styled, { css } from "styled-components";
import Flex from "../utils/flex";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.theme.tokens.gutter.gutter100};
  color: ${props => props.theme.tokens.colors.neutrals.neutral900};
  background-color: ${props => props.theme.tokens.colors.branding.brand300};
  box-shadow: 0 0 10px 0px #000;
  z-index: 1;

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    padding-left: 0;
  }
`;

export const Nav = styled.nav`
  ${Flex.Flex100};
  margin: auto;
  max-width: ${props => props.theme.breakpoints.l};
`;

export const Item = styled.li``;

const state = css`
  color: ${props => props.theme.tokens.colors.neutrals.neutral100};
  background-color:  ${props => props.theme.tokens.colors.branding.brand600};
`;

export const Links = styled(Link)`
  padding: ${props => props.theme.tokens.gutter.gutter100};
  transition: all 0.3s;

  &.active {
    ${state};
  }

  @media (hover: hover) {
    &:hover {
      ${state}
    }
  }
`;
