import * as Styled from "./button.styled";
import { IButtons, Props } from "./interfaces";

const Likes = ({ likes }: IButtons) => (
  <Styled.Likes>{likes}</Styled.Likes>
)

const Downloads = ({ views }: IButtons) => (
  <Styled.Views>{views}</Styled.Views>
)

const mapChildren: any = {
  likes: ({ ...props }) => <Likes {...props} />,
  downloads: ({ ...props }) => <Downloads {...props}/>,
}

export const Button = ({ children, type, ...props }: Props) => {
  return (
    <Styled.Wrapper>
      {mapChildren[type]({ ...props })}
      <Styled.Button as={props?.variant} type={type}>{children}</Styled.Button>
    </Styled.Wrapper>
  )
}
