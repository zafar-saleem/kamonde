import React from "react";
import * as Styled from "./navigation.styled";
import { useLocation } from "react-router-dom";
import { Links } from "./links";
import { IItem } from "./interfaces";

export const Navigation = () => {
  const [state, updateState] = React.useState(Links);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const updatedStates = Links.map((item: IItem) => {
      if (item.path === pathname) {
        return {
          ...item,
          state: "active",
        }
      }
      return {
        ...item,
        state: "inactive",
      }
    });

    updateState(updatedStates);
  }, [pathname]);

  return (
    <Styled.Navigation>
      <Styled.Nav>
        {
          state.map((item, index) => (
            <Styled.Item key={index}>
              <Styled.Links to={item.path} className={item.state}>{item.label}</Styled.Links>
            </Styled.Item>
          ))
        }
      </Styled.Nav>
    </Styled.Navigation>
  )
}
