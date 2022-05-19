import styled from 'styled-components'

export const Button = styled.button`
  min-width: 100px;
  padding: 12px 14px;
  color: ${props => props.red.textColor};
  font-size: 16px;
  line-height: 24px;
  background-color: ${props => props.red.background};
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background-color: #b30000;
  }
`
