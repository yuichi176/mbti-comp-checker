import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ flexGrow: 1, flex: 0 }}>
          <AppBar position='static' color='primary'>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                MBTI Compatibility Checker
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Container maxWidth='sm' sx={{ flex: 1 }}>
          {children}
        </Container>
        <Box
          sx={{
            height: '80px',
            background: '#263238',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <footer>
            <Typography variant='caption' component='span'>
              ©&nbsp;yuichi-sugiyama
            </Typography>
          </footer>
        </Box>
      </Box>
    </>
  )
}

export default Layout
