import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.tokens.colors.neutrals.neutral200};
  padding: ${props => props.theme.tokens.gutter.gutter100};
  margin-bottom: ${props => props.theme.tokens.gutter.gutter100};
  transition: all 0.5s;
  outline: none;
  font-size: 1.1rem;
  letter-spacing: 1.5px;

  &:focus {
    box-shadow: 0 0 10px 5px ${props => props.theme.tokens.colors.neutrals.neutral200};
  }
`;
