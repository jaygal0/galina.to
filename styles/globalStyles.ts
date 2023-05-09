import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  cursor: url('/cursor.svg'),auto;
}
#__next {
  position: relative;
  overflow-x: clip;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #1C1C1C;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Krona One', sans-serif;
}

.image-hover {
  &:hover {
  cursor: zoom-in;
  }
}


`
export default GlobalStyle
