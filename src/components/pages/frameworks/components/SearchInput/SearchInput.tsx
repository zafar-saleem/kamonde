import * as Styled from "./SearchInput.styled";

export const SearchInput = ({ ...props }) => {

  return (
    <div>
      <Styled.Input type="text" name="search" autoFocus {...props} />
    </div>
  )
}
