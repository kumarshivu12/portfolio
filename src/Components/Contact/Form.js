import { Send } from '@mui/icons-material';
import { Stack,TextField,styled,Button, Snackbar, Alert} from '@mui/material'
import React, { useState } from 'react'

//Style
const StyledButton=styled(Button)`
font-size:25px;
margin-top:30px;
text-transform:none;
font-weight:600;
padding:7px 70px;
border:5px solid cyan;
color:white;
border-radius:30px;
width:30%;
&:hover{
    background-color:cyan;
    border:5px solid cyan;
    color:black;
    font-size:25px;
    font-weight:700;
    transform:scale(1.05);
`
const CssTextField = styled(TextField)({
    '& .MuiInputBase-input':{
        color:'white',
    },
    '& label.Mui-focused': {
      color: 'cyan !important',
      fontWeight:500,
      fontSize:25,
      background:'#050b17',
      margin:'0 10px',
      paddingRight:'10px'
    },
    '& MuiLabel-root': {
        color: 'cyan',
        fontWeight:500,
        fontSize:20,
        letterSpacing:'20px',
        // background:'white',
        // padding:'0 10px'
        
      },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'cyan',
        border:'5px solid cyan',
        borderRadius:'20px',
      },
      '&:hover fieldset': {
        borderColor: 'cyan',
      },
      '&.Mui-focused fieldset': {
        border:'5px solid cyan',
        borderRadius:'20px',
      },
    },
  });
const Form = () => {
  const [open,setOpen]=useState(false);
  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    // <Form >
    <Stack direction='column' spacing={3} style={{padding:30,justifyContent:'center'}} >
        <CssTextField
        variant='outlined' 
        placeholder='Enter Name' 
        name='name'
        label='Name' 
        color='info'
        InputLabelProps={{style:{
            color:'cyan',
            fontSize:20,
            fontWeight:500
        }}}
        />
        <CssTextField
        variant='outlined' 
        placeholder='Enter Email' 
        name='user_email'
        label='Email' 
        color='info'
        InputLabelProps={{style:{
            color:'cyan',
            fontSize:20,
            fontWeight:500
        }}} 
        />
        <CssTextField
        variant='outlined' 
        placeholder='Enter your message here...' 
        label='Message' 
        name='message'
        color='info'
        InputLabelProps={{style:{
            color:'cyan',
            fontSize:20,
            fontWeight:500
        }}} 
        multiline 
        rows={6}/>
        <StyledButton variant='outlined'
        onClick={()=>setOpen(true)} 
        endIcon=
        {
        <Send
        style={{
            fontSize:'30px',
            fontWeight:600
        }}
        />
        }
        >Send</StyledButton>
        {/* </form> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleClose} severity='success'>
          Message Sent
        </Alert>
      </Snackbar>
    </Stack>
    // </Form>
  )
}

export default Form