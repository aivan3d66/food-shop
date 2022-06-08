import styled from 'styled-components'

export const Filter = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 0 20px;
  margin: 0;
  background-color: #ffffff;
`

export const FilterWrapper = styled.div`
  max-width: 1248px;
  min-height: 40px;
  margin: 0 auto;
  font-size: 16px;

  ul {
    display: flex;
    padding: 0;
    font-size: 18px;
    line-height: 24px;
  }
`

export const Slide = styled.li`
  flex-grow: 1;
  padding: 10px 0;
  color: #9D9D9D;
  text-align: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: 0.3s;

  span {
    width: 100%;
    
    &:hover {
      color: #E4002B;
    }
  }
`
