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
    color: #ffffff;
    background-color: #b30000;
  }
  
  &:disabled {
    color: #E4002B;
    border-color: #E4002B;
    background-color: #F7F6F5;
  }
`
