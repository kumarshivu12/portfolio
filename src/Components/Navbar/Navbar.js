import { Home, Person, Settings,Call,Code, Menu } from '@mui/icons-material'
import { AppBar, Box,Button,Stack,Toolbar, Typography ,styled, List, ListItem, Drawer} from '@mui/material'
import React, { useState } from 'react'
import {HashLink} from 'react-router-hash-link'
import CustomButtons from './CutomButtons'
import './Navbar.css'

//Style
// const Title=styled(HashLink)`
// padding: 20px 30px;
// // box-shadow:'0 1px 20px 0 0.6 white'
// cursor:pointer;
// text-decoration:none;
// color:inherit;
// `
const StyledButton=styled(Button)`
color:white;
font-size:18px;
text-transform:none;
font-weight:600;
padding:7px 20px;
&:hover{
    border:2px solid cyan;
    color:cyan;
}
&:active{
    color:cyan !important;
    text-decoration:underline;
}
&>svg{
    font-size:50px;
    color:red
}
`
const Component=styled(Box)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
        padding:'5px',
        marginLeft:'auto',
        '&>svg':{
        fontSize:'40px',
        border:'2px solid white',
        borderRadius:'5px',
        cursor:'pointer',
        padding:'5px',
        '&:hover':{
            background:'white',
            color:'cyan',
            fontSize:'45px',
        }
        }
    }
}))



const NavStyle=styled(Stack)(({theme})=>({
    display:'block',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const Navbar = () => {
    const [open,setOpen]=useState(false);
    // const navigate=useNavigate();
    const list = () => (
    <Box  onClick={handleClose} style={{background:'#050b17'}}>
        <List>
        <ListItem button>
            <CustomButtons/>
        </ListItem>
        </List>
    </Box>
    );
    const handleClose=()=>{
        setOpen(false)
      }
  return (
        <AppBar style={{background:'#050b17'}}>
            <Toolbar>
                <HashLink to='#home' smooth style={{textDecoration:'none',color:'inherit','&:active':{color:'cyan'}}}>
                <Typography variant='h4' style={{fontWeight:600}}>Portfo
                    <Typography variant='h4' component='span' style={{color:'cyan',fontWeight:600}}>lio.
                    </Typography>
                </Typography>
                </HashLink>
                <Component>
                    <Menu onClick={()=>setOpen(true)}/>
                </Component>
                <Drawer open={open} onClose={handleClose}
                anchor='top'
                sx={{background:'#050b17'}}
                >
                    {list()}
                </Drawer>
                <NavStyle direction='row' spacing={1} style={{marginLeft:'auto',marginRight:'3%'}}>
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
                </NavStyle>
            </Toolbar>
        </AppBar>
  )
}

export default Navbar