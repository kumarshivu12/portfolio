import { Box ,styled, Typography} from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee'
import {skillsData as Data} from '../../Constants/Data'
import { skillsImage } from '../../Constants/SkillsImage'

const Component=styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
  padding: 2.5rem 2rem 2rem 2rem;
  padding-top:100px
`
const Header=styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center; 
`
const Text=styled(Typography)`
// font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;
    `
const Wrapper=styled(Box)`
display: flex;
align-items: center;
justify-content: center; 
width: 100%;
margin-top: 3.5rem;
padding: 0 2rem;
`
const Card=styled(Box)`
  background: #FAFAFA;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;
  &>img{
    height: 100px;
    pointer-events: none;
  }
  &:hover{
    transform: scale(1.15);
  }
  &>h5{
    font-family: Big Shoulders Text;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    margin-top: 4rem;
    color:#050b17;

  }
`
const Skills = () => {
  const skillBoxStyle = {
    backgroundColor: 'rgb(234 234 234 1)',
    boxShadow: `0px 0px 25px cyan`
}
  return (
    <Component id='skills' >
      <Header>
        <Text variant='h2'>Skills</Text>
      </Header>
      <Wrapper>
        <Box style={{width: '100%',margin: '0 2rem'}}>
          <Marquee
          gradient={false} 
          speed={80} 
          pauseOnHover={true}
          pauseOnClick={true} 
          delay={0}
          play={true} 
          direction="left"
          >
            {Data.map((skill, id) => (
                <Card key={id} style={skillBoxStyle}>
                    <img src={skillsImage(skill)} alt={skill} />
                    <Typography variant='h5'>{skill}</Typography>
                    {/* <h3 style={{color: '#050b17'}}>
                        {skill}
                    </h3> */}
                </Card>
            ))}
          </Marquee>
        </Box>
      </Wrapper>
    </Component>
  )
}

export default Skills