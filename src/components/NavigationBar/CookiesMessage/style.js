import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 2%;
  left: 25vw;
  width: 45vw;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 4px gray;
  text-align: center;
  color: ${({ theme }) => (theme === 'light' ? 'rgb(112, 112, 112)' : 'inherit')};
  background-color: ${({ theme }) => (theme === 'light' ? 'rgb(240, 240, 240)' : 'rgb(48, 48, 48)')};
  cursor: pointer;
  user-select: none;
  animation: showMessage 8s;

  @media (max-width: 768px) {
    width: 75vw;
    left: 12.5vw;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 95vw;
    left: 2.5vw;
  }

  @keyframes showMessage {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`