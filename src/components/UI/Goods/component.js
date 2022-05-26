import styled from 'styled-components'

export const Goods = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
`

export const GoodsWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #F7F6F5;
`

export const GoodsCategory = styled.div`
  max-width: 1248px;
  min-height: 100vh;
  margin: 0 auto;
  font-size: 16px;

  h2 {
    font-size: 32px;
    font-weight: normal;
    line-height: 40px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Error = styled.h1`
  max-width: 900px;
  margin: 100px auto;
  text-align: center;
  color: #E4002B;
`
