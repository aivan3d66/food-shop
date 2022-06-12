import styled from 'styled-components'

export const BasketProduct = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  span {
    color: #E4002B;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      justify-content: space-between;
      min-width: 300px;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }


  img {
    width: 120px;
    height: auto;
    margin: 0;
  }
`
