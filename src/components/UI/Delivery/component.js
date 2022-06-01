import styled from 'styled-components'

export const Delivery = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const DeliveryWrapper = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  font-size: 16px;
`

export const DeliveryHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  
  h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;

    @media (min-width: 768px) {
      font-size: 44px;
      line-height: 52px;
    }

    @media (min-width: 1120px) {
      font-size: 64px;
      line-height: 72px;
    }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const DeliveryControls = styled.div`
  display: flex;

  button {
    width: 200px;

    &:last-child:hover {
      color: #ffffff;
      background-color: #b30000;
    }
  }
`

export const DeliveryBody = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  padding: 20px 0;
  font-size: 32px;
  line-height: 40px;
  
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`
