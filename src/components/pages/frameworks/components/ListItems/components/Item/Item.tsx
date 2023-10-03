import * as Styled from "./Item.styled";
import Button from "./components/button";

export const Item = ({ ...props }) => {
  const trimDescription = (desc: string) => desc.length > 150 ? `${desc.substring(0, 100)}...` : desc;

  const { listItems } = props;
  return (
    <>
      {
        listItems?.map((item: any, index: number) => (
          <Styled.ListItem key={index}>
            <Styled.Avatar color={item.color}>{item.name.substring(0,1).toUpperCase()}</Styled.Avatar>
            <Styled.Title>{item.name}</Styled.Title>
            <p>{trimDescription(item.description)}</p>
            <Styled.Actions>
              <Button type="likes" likes={item.likes}>❤️</Button> <Button variant="span" type="downloads" views={item.views}>⬇️</Button>
            </Styled.Actions>
          </Styled.ListItem>
        ))
      }
    </>
  )
}