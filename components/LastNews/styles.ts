import styled from "styled-components";

export const LastNewsContainer = styled.section`
display: flex;
justify-content: center;
flex-direction: column;

margin: 0 auto;
max-width: 370px;
margin-top: 2.4rem;

ul{
  margin: 0;
  padding: 0;
  li{
    &:first-child{
     h3 {
       color: ${({ theme }) => theme.colors.primary}; 
      }   
    }
  }
}
`

export const Item = styled.li`
    margin-bottom: 24px;
    list-style: none;
    h3,h4{
      margin: 0;
      font-size: .70rem;
      font-weight: lighter;
    }

    h3{
      margin-bottom: 8px;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.gray};
    }
`;