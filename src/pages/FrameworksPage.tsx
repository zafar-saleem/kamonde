import React from "react";
import ListItem from "../components/pages/frameworks/components/ListItems";
import SearchInput from "../components/pages/frameworks/components/SearchInput";
import items from "./items";

export const FrameworksPage = () => {
  const [listItems, updateListItems] = React.useState(items);

  const handleUpdateListItems = React.useCallback((value: string) => {
    const reg = new RegExp(value.toLowerCase(), "gi");

    const filteredItems = listItems.filter((item) => {
      const content = `${item.name} ${item.description}`.toLowerCase();
      if (content.search(reg) !== -1) {
        return item;
      }
    });

    updateListItems(filteredItems as any);
  }, [listItems]);

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
      <ListItem {...listProps} type={listItems.length <= 0 ? "empty" : "list"} />
    </>
  )
}
