import React from "react";
import ListItem from "./components/list-items";
import SearchInput from "./components/search-input";
import items from "../items";
import { debounce } from "lodash";

export const FrameworksPage = () => {
  const [listItems, updateListItems] = React.useState(items);

  const filterListItems = React.useCallback((value: string) => {
    const reg = new RegExp(value.toLowerCase(), "gi");

    const filteredItems = listItems.filter((item) => {
      const content = `${item.name} ${item.description}`.toLowerCase();
      if (content.search(reg) !== -1) {
        return item;
      }
    });

    updateListItems(filteredItems as any);
  }, []);

  const handleUpdateListItems = debounce(filterListItems, 300);

  const hasListItems = () => listItems.length <= 0 ? "empty" : "list";

  const listProps = {
    listItems,
  };

  const searchProps = {
    onChange: (event: any) => handleUpdateListItems(event.target.value),
  };

  return (
    <>
      <h1>Frameworks</h1>
      <SearchInput {...searchProps} />
      <ListItem {...listProps} type={hasListItems()} />
    </>
  )
}
