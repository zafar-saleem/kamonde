import { IProps } from "./interfaces";
import * as Styled from "./ListItem.styled";
import { MapComponents } from "./MapComponents";

export const ListItem = ({ ...props }: IProps) => {
  const {
    listItems,
    type,
  } = props;

  // console.log(type, MapComponents[type]());

  return (
    <Styled.Grid>
      {
        MapComponents[type]({ listItems })
      }
    </Styled.Grid>
  )
}
