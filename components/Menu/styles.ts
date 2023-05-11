import styled from "styled-components";

export const MenuContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
margin: 0;
margin-bottom: 32px;
li{
  list-style: none;
  color: ${({ theme }) => theme.colors.headerTextColor};
}
`