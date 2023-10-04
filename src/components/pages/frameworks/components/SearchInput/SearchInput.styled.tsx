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
  text-align: center;

  &::placeholder {
    font-size: 0.8rem;
  }

  &:focus {
    box-shadow: 0 0 10px 5px ${props => props.theme.tokens.colors.neutrals.neutral200};
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  right: 1rem;
  top: -4px;
  font-size: 1.5rem;
`;
