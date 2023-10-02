import styled, { css } from "styled-components";
import { IProps } from "./interfaces";

// @ts-ignore
const Flex: any = css``;

Flex.Flex100 = css`
  display: flex;
`;

Flex.Flex200 = css`
  display: flex;
  gap: ${props => props.theme.tokens.gutter.gutter300};
`;

Flex.Flex300 = css`
  display: flex;
  gap: ${props => props.theme.tokens.gutter.gutter300};
`;

export const FlexWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: ${props => props.direction || `row`};
  gap: ${props => `${props.gap}` || `0`};
`;

export default Flex;
