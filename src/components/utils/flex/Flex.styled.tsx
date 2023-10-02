import styled from "styled-components";
import { IProps } from "./interfaces";

export const Flex = styled.div<IProps>`
  display: flex;
  flex-direction: ${props => props.direction || `row`};
  gap: ${props => `${props.gap}` || `0`};
`;
