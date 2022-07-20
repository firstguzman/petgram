import styled from 'styled-components'

export const Button = styled.button`
  background: #7a3bb8;
  border-radius: 20px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
