import styled from 'styled-components'

export const Basket = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
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
  }
`

export const BasketEmpty = styled.span`
  color: #E4002B;
  font-weight: normal;
`

export const BasketPrice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  
  button {
    margin: 40px 40px 40px 0;
  }
`

export const Price = styled.span`
    margin: 40px 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`

export const ValidationMessage = styled.span`
  position: absolute;
  bottom: -20px;
  width: auto;
  padding: 12px 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  background-color: #000000;
  border-radius: 8px;
  transition: 0.3s;
  
  &::before {
    position: absolute;
    content: '';
    top: -5px;
    left: 70%;
    right: 50%;
    width: 14px;
    height: 14px;
    background-color: #000000;
    transform: rotate(45deg);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`
