import styled from "styled-components";

export const HeaderComponent = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
display: flex;
justify-content: center;
`

export const HeaderContainer = styled.div`
min-height: 250px;
max-width: 720px;
padding: 32px 0;

h1,p {
  color: ${({ theme }) => theme.colors.headerTextColor}
}

h1{
  font-size: 2.4rem;
}

p{
  text-align: justify;
  font-size: .90rem;
}
`