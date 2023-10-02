import Item from "./components/Item";
import NotFound from "./components/NotFound";

export const MapComponents: any = {
  empty: ({ index }: any) => <NotFound key={index} />,
  list: ({ listItems }: any) => <Item listItems={listItems} />
}