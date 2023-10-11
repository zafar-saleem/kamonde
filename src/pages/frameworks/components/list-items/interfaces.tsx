interface IListItems {
  name: string;
  description: string;
}

export interface IProps {
  listItems: IListItems[];
  type: string;
}
