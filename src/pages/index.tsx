import Layout from '@/components/Layout'
import SelectBox from '@/components/SelectBox'
import { Box, Button, Paper, Rating, SelectChangeEvent, Typography } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { mbtiMap, compDesc } from '@/assets/mbtiMap'

const TopPage = () => {
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [rateValue, setRateValue] = useState(0)
  const [rateTitle, setRateTitle] = useState('please enter')

  const handleChange1 = (event: SelectChangeEvent) => {
    setType1(event.target.value)
  }

  const handleChange2 = (event: SelectChangeEvent) => {
    setType2(event.target.value)
  }

  const handleJudge = () => {
    if (type1 === '' || type2 === '') {
      setRateValue(0)
      setRateTitle('please enter')
    } else {
      const rate = mbtiMap[type1][type2].compatibilityRate
      setRateValue(rate)
      setRateTitle(compDesc[rate])
    }
  }

  return (
    <Layout title='MBTI Compatibility Checker'>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Paper
          sx={{
            padding: '15px 40px',
            marginTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5' component='legend' sx={{ marginBottom: '5px' }}>
            {rateTitle}
          </Typography>
          <Rating name='read-only' value={rateValue} size='large' readOnly />
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <SelectBox label='Type1' id={type1} handleChange={handleChange1} />
          <CloseIcon sx={{ color: '#757575', padding: '15px 15px 0 15px' }} />
          <SelectBox label='Type2' id={type2} handleChange={handleChange2} />
        </Box>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: '100px', marginTop: '20px', marginBottom: '15px' }}
          onClick={handleJudge}
        >
          Judge!
        </Button>
        <Typography variant='body1' component='p'>
          you can check your personality type{' '}
          <a href='https://www.16personalities.com/' target='_blank' rel='noopener noreferrer'>
            here
          </a>
          .
        </Typography>
      </Box>
    </Layout>
  )
}

export default TopPage
