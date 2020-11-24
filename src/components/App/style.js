import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh; // fixes gradient on mobile
  }

  body {
    color: ${({ theme }) => (theme === 'light' ? 'rgb(80, 80, 80)' : 'white')};
    background: ${({ theme }) => (theme === 'light' ? 'initial' : 'linear-gradient(#202020, #404040) fixed')};
  }

  img {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    &:visited {
      color: unset;
    }
  }
`