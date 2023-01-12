import { Box, Grid, Typography,Button,styled } from '@mui/material'
import React from 'react'
import avatar from '../../assets/svg/avatar.svg'

//Style
const StyledButton=styled(Button)`
font-size:18px;
margin-top:30px;
text-transform:none;
font-weight:600;
padding:7px 20px;
border:3px solid cyan;
color:white;
&:hover{
    background-color:cyan;
    color:black;
    font-size:20px;
    font-weight:700;
`

const About = () => {
  return (
    <Grid id='about' container style={{height:'100%',alignItems:'center',padding:'0 20px',marginTop:40,paddingTop:100}}>
      <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center',alignSelf:'center'}}>
      <Typography variant='h2' style={{fontWeight:600}}>About Me</Typography>
      </Grid>
      <Grid item lg={5} md={6} sm={12} xs={12} style={{padding:'30px'}}>
      <Box style={{display:'flex',justifyContent:'center'}}>
        <img src={avatar}  alt='avatar' style={{height:'400px',width:'auto'}}/>
        </Box>
      </Grid>
      <Grid item lg={7} md={6} sm={12} xs={12} style={{lineHeight:'30px'}}>
        <Box style={{padding:'70px'}}>
            <Typography variant='h4'fontWeight={600} gutterBottom>I'm Shivam </Typography>
            <Typography variant='h6' fontWeight={600}>Hi, my name is Shivam Kumar and I am a full-stack web developer with 1+ years of experience with modern technologies like React js, Node js, Express JS, Next js, Mongo DB, Mongoose etc..
            </Typography>
            <a
              href="https://www.linkedin.com/in/shivam-kumar08/"
              target="_blank"
              rel="noreferrer"
              style={{textDecoration:'none'}}
            >
            <StyledButton variant='outlined'>Hire Me</StyledButton>
            </a>
        </Box>
      </Grid>
    </Grid>
  )
}

export default About