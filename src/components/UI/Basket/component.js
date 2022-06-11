import styled from 'styled-components'

export const Basket = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 0;
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
    }

    img {
      width: 120px;
      height: auto;
      margin: 0;
    }
  }
`

export const BasketEmpty = styled.span`
  color: #E4002B;
  font-weight: normal;
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
    margin: 40px 40px 40px 0;
  }
`

export const ValidationMessage = styled.span`
  position: absolute;
  bottom: -60px;
  width: auto;
  padding: 12px 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background-color: #000000;
  border-radius: 8px;
  transition: 0.3s;
  
  &::before {
    position: absolute;
    content: '';
    top: -5px;
    left: 50%;
    width: 14px;
    height: 14px;
    background-color: #000000;
    transform: rotate(45deg);
  }
`
