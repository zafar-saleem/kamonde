import * as Styled from "./button.styled";
import { IButtons, Props } from "./interfaces";

const Likes = ({ likes }: IButtons) => (
  <Styled.Likes>{likes}</Styled.Likes>
)

const Views = ({ views }: IButtons) => (
  <Styled.Views>{views}</Styled.Views>
)

const mapChildren: any = {
  likes: ({ ...props }) => <Likes {...props} />,
  views: ({ ...props }) => <Views {...props}/>,
}

export const Button = ({ children, type, ...props }: Props) => {
  return (
    <Styled.Wrapper>
      {mapChildren[type]({ ...props })}
      <Styled.Button>{children}</Styled.Button>
    </Styled.Wrapper>
  )
}
