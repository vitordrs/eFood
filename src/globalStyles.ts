import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  branca: '#ffff',
  begeClaro: '#FFF8F2'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background-color: ${cores.begeClaro};
  }

  a {
    text-decoration: none;
  }
`
