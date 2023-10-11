import { IProps } from "./interfaces";
import Flex, * as Styled from "./flex.styled";

Flex.FlexWrapper = ({ children, ...props }: IProps) => {
  return (
    <Styled.FlexWrapper {...props}>{children}</Styled.FlexWrapper>
  )
}

export default Flex;
