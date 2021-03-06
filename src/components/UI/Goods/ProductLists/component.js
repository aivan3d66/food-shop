import styled from 'styled-components'

export const Products = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
`

export const ProductsWrapper = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #F7F6F5;
`

export const ProductsCategory = styled.div`
  max-width: 1248px;
  min-height: 100vh;
  margin: 0 auto;
  font-size: 16px;

  h2 {
    margin: 40px 20px;
    font-size: 32px;
    font-weight: normal;
    line-height: 40px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`

export const Error = styled.h1`
  max-width: 900px;
  margin: 100px auto;
  text-align: center;
  color: #E4002B;
`
