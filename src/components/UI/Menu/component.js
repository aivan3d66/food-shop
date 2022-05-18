import styled from 'styled-components'

export const Menu = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
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
  border: 1px solid red;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
  }
`

export const MenuLogo = styled.div`
  width: 227px;
  height: 227px;
  margin: auto;
  background-color: #cacaca;
  border-radius: 50%;
`
