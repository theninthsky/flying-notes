import React from 'react'
import styled from 'styled-components'

const StyledFileSpinner = styled.div`
  width: 15px;
  height: 15px;
  border-top: 2px solid rgba(30, 144, 255, 0.5);
  border-right: 2px solid transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default () => <StyledFileSpinner />