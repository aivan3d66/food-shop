import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1248px;
  min-height: 100px;
  margin: 0 auto;
  
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    
    li {
      font-size: 25px;
      cursor: pointer;
      transition: 0.3s;
      
      &:hover {
        color: #E4002B;
      }
    }
  }
`
