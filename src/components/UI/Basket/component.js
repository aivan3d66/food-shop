import styled from 'styled-components'

export const Basket = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  margin: 0;
  background-color: #F7F6F5;
`

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1248px;
  min-height: 100%;
  margin: 0 auto;
  font-size: 16px;
`

export const BasketProducts = styled.div`
  ul {
    width: 100%;
    padding: 20px 0;

    li {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      align-items: center;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }

    img {
      width: 120px;
      height: auto;
      margin: 0;
    }
  }
`

export const BasketPrice = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 40px 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  button {
    margin: 40px 0;
  }
`
