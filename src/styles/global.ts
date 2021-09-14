import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #FFD100;
    --background: #202020;
    --white: #eeeeee;
    --black: #333533;
    --shadow: #FFEE32;
    --container: 80rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62,5%;

}
html, body, #__next {
  height: 100%;
  background: var(--background);
    color: var(--white);
}


body {
  font-family: 'Ubuntu Mono';
}
p,
a {
  font-size: 1rem;
  line-height: var(--small);
  color: var(--white);
}
a {

  text-decoration: none;
}

`

export default GlobalStyles
