import * as Styled from "./search-input.styled";

export const SearchInput = ({ ...props }) => {

  return (
    <Styled.Label>
      <Styled.Icon>🔎</Styled.Icon>
      <Styled.Input type="text" name="search" placeholder="Type search query here e.g. React, open-source etc" autoFocus {...props} />
    </Styled.Label>
  )
}
