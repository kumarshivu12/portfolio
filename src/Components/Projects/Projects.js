import { Grid, Stack, Typography,styled,Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import contact from '../../assets/svg/contact.svg'
import { GitHub, PlayCircle } from '@mui/icons-material';

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 2,
  },
  tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 1,
  },
  mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
  }
};

const Component=styled(Box)(({theme})=>({
  borderRadius:'5px',
  border:'5px solid cyan',
  boxShadow: '0px 0px 10px cyan',
  paddingTop:'10px',
  height:'300px',
  margin:'1.5rem',
  '&:hover':{
    transform:'scale(1.1)'
  },
  [theme.breakpoints.down('sm')]:{
    height:'250px',
  },
  // [theme.breakpoints.between('md','lg')]:{
  //   width:'30vw',
  // }
}))
const Image=styled('img')(({theme})=>({
  width:'30vw',
  height:'250px',
  [theme.breakpoints.down('lg')]:{
      width:'45vw',
  },
  [theme.breakpoints.between('md')]:{
    width:'70vw',
  },
  [theme.breakpoints.between('sm')]:{
    height:'50px',
  }
}))
const Wrapper=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  width: '-webkit-fill-available',
  justifyContent:'space-between',
  background:'#050b178a',
  padding:'10px 20px',
  marginTop:'auto',
  height:'30px',
  '&>svg':{
    fontSize:'25px',
    border:'2px solid cyan',
    borderRadius:'50%',
    cursor:'pointer',
    padding:'5px',
    color:'white',
    '&:hover':{
      background:'cyan',
      color:'black !important',
      fontSize:'28px',
      border:'2px solid cyan',
    }
  }
}))

const Projects = () => {
  const products=['1','2','3','1','2','3','1','2','3']
  return (
    <Grid id='projects' container style={{marginTop:40,paddingTop:'100px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center'}}>
      <Typography variant='h2' style={{fontWeight:600}}>My Projects</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center',alignSelf:'flex-start',marginTop:'60px'}}>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          products.map((product)=>
          <Stack spacing={1} direction='row' style={{padding:'0 20px'}}>
            <Component style={{position:'relative'}}>
              <Image src={contact} alt='project' />
            <Wrapper style={{position:'absolute',bottom:0}}>
              <PlayCircle/>
              <Typography fontWeight={600} >Port Folio Website</Typography>
              <GitHub/>
            </Wrapper>
          </Component>
          </Stack>
          )
        }
      {/* <Stack spacing={2} direction='row'>
      <ProjectBox img={avatar} title='avatar'/>
        <ProjectBox img={contact} title='contact'/>
        <ProjectBox img={education} title='education'/>
        <ProjectBox img={home} title='home'/>
        <ProjectBox img={avatar} title='avatar'/>
        <ProjectBox img={contact} title='contact'/>
        <ProjectBox img={education} title='education'/>
        <ProjectBox img={home} title='home'/>
        <ProjectBox img={avatar} title='avatar'/>
        <ProjectBox img={contact} title='contact'/>
        <ProjectBox img={education} title='education'/>
        <ProjectBox img={home} title='home'/>
      </Stack> */}
      </Carousel>
      </Grid>
    </Grid>
  )
}

export default Projects