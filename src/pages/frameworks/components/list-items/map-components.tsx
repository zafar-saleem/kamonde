import Item from "./components/item";
import NotFound from "./components/not-found";

export const MapComponents: any = {
  empty: ({ index }: any) => <NotFound key={index} />,
  list: ({ listItems }: any) => <Item listItems={listItems} />
}