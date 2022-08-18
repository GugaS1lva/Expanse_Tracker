import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/theme'
import GlobalStyle from '../components/globalstyles'
import '../styles/globals.css'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
