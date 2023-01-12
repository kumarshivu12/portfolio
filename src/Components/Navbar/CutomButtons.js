import { Stack,Button,styled } from '@mui/material'
import React from 'react'
import { Home, Person, Settings,Call,Code, Menu } from '@mui/icons-material'
import { HashLink } from 'react-router-hash-link'

const StyledButton=styled(Button)`
color:white;
font-size:16px;
text-transform:none;
font-weight:600;
padding:10px 5px;
&:hover{
    border:2px solid cyan;
    color:cyan;
}
&:active{
    color:white;
}
&>svg{
    font-size:50px;
}
`
const CutomButtons = () => {
  return (
    <Stack direction='row' spacing={1} style={{marginLeft:'auto',marginRight:'3%',justifyContent:'center',width:'100%',boxShadow:'5px white'}}>
      <HashLink to='#home' smooth style={{textDecoration:'none'}}>
          <StyledButton variant='text' startIcon={<Home/>}>Home</StyledButton>
      </HashLink>
      <HashLink to='#about' smooth style={{textDecoration:'none'}}>
      <StyledButton variant='text'startIcon={<Person/>}>About</StyledButton>
      </HashLink>
      <HashLink to='#skills' smooth style={{textDecoration:'none'}}>
      <StyledButton variant='text'startIcon={<Settings/>}>Skills</StyledButton>
      </HashLink>
      <HashLink to='#projects' smooth style={{textDecoration:'none'}}>
      <StyledButton variant='text'startIcon={<Code/>}>Projects</StyledButton>
      </HashLink>
      <HashLink to='#contact' smooth style={{textDecoration:'none'}}>
      <StyledButton variant='text'startIcon={<Call/>}>Contact</StyledButton>
      </HashLink>
  </Stack>
  )
}

export default CutomButtons