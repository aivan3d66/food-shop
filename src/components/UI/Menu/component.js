import styled from 'styled-components'

export const Menu = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`

export const MenuTricolor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin: auto;

  span {
    width: 32px;
    height: 70px;
    background-color: #E4002B;
  }
`

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  max-width: 1248px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 0;
  font-size: 16px;
  line-height: 24px;

  div {
    margin: auto;
  }
  
  h4 {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const MenuLogo = styled.div`
  width: 227px;
  height: 227px;
  margin: auto;
  background-color: #cacaca;
  border-radius: 50%;
`
