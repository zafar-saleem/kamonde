import { css } from "styled-components";
import { IProps } from "./interfaces";
import * as Styled from "./Flex.styled";

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

Flex.FlexWrapper = ({ children, ...props }: IProps) => {
  return (
    <Styled.Flex {...props}>{children}</Styled.Flex>
  )
}

export default Flex;
