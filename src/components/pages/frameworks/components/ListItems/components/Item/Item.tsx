import * as Styled from "./Item.styled";

const colors = ["#ffac00", "#b5cd21", "#4ecd21", "#21cdc7", "#2157cd", "#b121cd", "#ec42e0", "#ec4260"];

const getRandomColor = () => {
  return colors[Math.ceil(Math.random() * colors.length - 1)];
}

export const Item = ({ ...props }) => (
  <>
    {
      props.listItems?.map((item: any, index: number) => (
        <Styled.ListItem key={index}>
          <Styled.Avatar color={getRandomColor()}>{item.name.substring(0,1).toUpperCase()}</Styled.Avatar>
          <Styled.Title>{item.name}</Styled.Title>
          <p>{item.description}</p>
        </Styled.ListItem>
      ))
    }
  </>
)
