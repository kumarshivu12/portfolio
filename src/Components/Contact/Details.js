import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
// import { Link } from 'react-router-dom'

//Style
const Component = styled(Box)`
  display: flex;
  align-items: center;
  padding: 30px 10px;
  & > a > svg {
    font-size: 22px;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    padding: 12px;
    color: cyan !important;
    &:hover {
      background: cyan;
      color: black !important;
      font-size: 28px;
      border: 2px solid cyan;
    }
  }
`;
const Text = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;
const Details = () => {
  return (
    <Box style={{ paddingLeft: "20px" }}>
      <Component>
        <a
          href='mailto:shivamaakumar12@gmail.com'
          target="_blank"
          rel="noreferrer"
        >
          <Email />
        </a>
        <Text>&nbsp;&nbsp;shivamaakumar12@gmail.com</Text>
      </Component>
      <Component>
        <a
          href="tel:+91 9622895013"
          target="_blank"
          rel="noreferrer"
        >
          <Phone />
        </a>
        <Text>&nbsp;&nbsp;+91 9622895013</Text>
      </Component>
      <Component>
        <a  >
        <LocationOn />
        </a>
        <Text>&nbsp;&nbsp;Meerut, Uttar Pradesh</Text>
        
      </Component>
      <Component style={{ justifyContent: "center" }}>
        <a
          href="https://www.linkedin.com/in/shivam-kumar08/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/kumarshivu12"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://api.whatsapp.com/qr/7KIPH2GVXAIYD1?autoload=1&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/kumarshivam08/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram target="_blank" />
        </a>
      </Component>
    </Box>
  );
};

export default Details;

//https://www.instagram.com/kumarshivam08/?next=%2F
//https://github.com/kumarshivu12
// https://www.linkedin.com/in/shivam-kumar08/
//https://api.whatsapp.com/qr/7KIPH2GVXAIYD1?autoload=1&app_absent=0
