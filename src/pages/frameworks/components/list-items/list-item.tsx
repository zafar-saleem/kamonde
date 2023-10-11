import { IProps } from "./interfaces";
import * as Styled from "./list-item.styled";
import { MapComponents } from "./map-components";

export const ListItem = ({ ...props }: IProps) => {
  const {
    listItems,
    type,
  } = props;

  return (
    <Styled.Grid>
      {
        MapComponents[type]({ listItems })
      }
    </Styled.Grid>
  )
}
