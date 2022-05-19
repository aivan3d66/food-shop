import styled from 'styled-components'

export const Delivery = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const DeliveryWrapper = styled.div`
  max-width: 1248px;
  min-height: 40px;
  margin: 0 auto;
  font-size: 16px;
`

export const DeliveryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 72px;
  }
`

export const DeliveryControls = styled.div`
  display: flex;

  button {
    width: 200px;
    &:last-child {
      color: #9D9D9D;
      background-color: #F7F6F5;
    }

    &:last-child:hover {
      color: #ffffff;
      background-color: #b30000;
    }
  }
`

export const DeliveryBody = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 32px;
  line-height: 40px;
  
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`
