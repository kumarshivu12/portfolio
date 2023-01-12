import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Details from './Details'
import contact from '../../assets/svg/contact.svg'
import Form from './Form'


const Contact = () => {
  return (
    <Grid id='contact' container style={{marginTop:'40px',paddingTop:'80px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12} mb={2} style={{textAlign:'center',alignSelf:'center',marginBottom:'50px'}}>
      <Typography variant='h2' style={{fontWeight:600}}>Contact Me</Typography>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Box style={{display:'flex',justifyContent:'center'}}>
          <img src={contact}  alt='contact' style={{height:'400px',width:'70%'}}/>
        </Box>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12} style={{alignSelf:'center'}}>
        <Form/>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Details/>
      </Grid>
    </Grid>
  )
}

export default Contact