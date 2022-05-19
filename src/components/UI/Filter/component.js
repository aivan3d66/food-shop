import styled from 'styled-components'

export const Filter = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const FilterWrapper = styled.div`
  max-width: 1248px;
  min-height: 40px;
  margin: 0 auto;
  font-size: 16px;
  
  ul {
    display: flex;
    justify-content: space-between;
    margin: 40px 0 0 0;
    padding: 10px 0;
    font-size: 18px;
    line-height: 24px;
    
    li {
      cursor: pointer;
    }
  }
`
