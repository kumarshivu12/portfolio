import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import home from '../../assets/svg/home.svg'

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
const Image=styled('img')(({theme})=>({
  [theme.breakpoints.down('md')]:{
    width:'450px'
  }
}))

const Home = () => {
  return (
      <Grid container id='home'
      style={{height:'100%',alignItems:'center',padding:'20px'}}
      >
        <Grid item lg={5} md={6} sm={12} xs={12}
        style={{
          padding:'20px',
          lineHeight:'30px',
          paddingTop:{sm:'100px'}
        }}
        >
          <Box style={{display:'flex',justifyContent:'center'}} >
          <Box style={{width:'450px'}}>
          <Typography variant='h5' style={{fontWeight:600}}>Hello, My name is</Typography>
          <Typography variant='h1' style={{fontWeight:600}}>Shivam</Typography>
          <Typography  variant='h4' component='span' style={{fontWeight:600}}>And I'm a  &nbsp;</Typography>
          <span style={{ color: 'cyan',fontSize:'40px',fontWeight:600 }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Developer', 'Coder', 'Student']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={500}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
          <br/>
          <a
            href="https://drive.google.com/file/d/17rgUDxeYp5KLhjAYX7QhIZq-FmmufM1f/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            
            download='resume'
            style={{textDecoration:'none'}}
          >
          <StyledButton variant='outlined'>Download CV</StyledButton>    
          </a>
          </Box>  
          </Box>  
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12} 
        style={{padding:'30px'}}
        
        >
          <Box style={{display:'flex',justifyContent:'center'}} >
          <Image src={home}  alt='logo' style={{height:'500px',width:'90%'}}/>
          </Box>
          
        </Grid>
      </Grid>
  )
}

export default Home