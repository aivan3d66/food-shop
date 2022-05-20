import styled from 'styled-components'

export const GoodCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 288px;
  height: 360px;
  padding: 42px 32px 20px 32px;
  margin: 0 auto;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    border-radius: 8px;

    h3 {
      color: #000000;
      transition: 0.3s;
    }

    img {
      transform: scale(1);
    }
  }
`

export const CardFlag = styled.div`
  position: absolute;
  top: 40px;
  left: 14%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${props => props.red};
`

export const CardControl = styled.div`
  position: relative;
  
  img {
    transition: 0.3s;
    transform: scale(0.9);
  }
`

export const CardText = styled.div`
  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin: 20px 0;
    color: #9D9D9D;
  }

  p {
    margin: 0;
    color: #E4002B;
  }
`
