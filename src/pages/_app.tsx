import { AppProps } from 'next/app'
import '@/styles/reset.css'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
