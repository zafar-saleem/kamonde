import { IProps } from "./interfaces";
import Flex, * as Styled from "./Flex.styled";

Flex.FlexWrapper = ({ children, ...props }: IProps) => {
  return (
    <Styled.FlexWrapper {...props}>{children}</Styled.FlexWrapper>
  )
}

export default Flex;
