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
    justify-content: space-between;
    margin: 0;
    padding: 10px 0;
    font-size: 18px;
    line-height: 24px;

    li {
      text-align: center;
      cursor: pointer;
      transition: 0.3s;
    }

    a {
      color: #000000;

      &:hover {
        color: #E4002B;
      }
    }
  }
`
