import styled from "styled-components";

export const LastNewsContainer = styled.section`
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;

margin: 0 auto;
max-width: 370px;

ul{
  margin: 0;
  padding: 0;
  li{
    margin-bottom: 24px;
    list-style: none;
    p{
      margin: 0;
      font-size: .70rem;
      &:first-child{
        color: red;
        margin-bottom: 8px;
        font-size: 1.2rem;
      }
    }
  }
}
` 