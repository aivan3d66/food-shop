import styled from 'styled-components'

export const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 0;
`

export const HeaderTricolor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 62px;
  margin: 0 auto;
  
  span {
    width: 14px;
    height: 17px;
    background-color: #E4002B;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1248px;
  min-height: 40px;
  margin: 0 auto;
  font-size: 16px;
`

export const HeaderMenu = styled.div`
  font-size: 20px;
`

export const BasketButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 82px;
  min-height: 36px;
  padding: 5px 10px;
  font-size: 20px;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: #E4002B;
  cursor: pointer;
  
  &:hover {
    background-color: #b30000;
  }
`
