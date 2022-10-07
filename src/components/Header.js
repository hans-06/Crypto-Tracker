import { AppBar, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import { customStyles } from '../Style';

const Header = () => {
  const history = useNavigate();
  const {currency, setCurrency } = CryptoState();

  // console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary:{
        main: "#fff"
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick={() => {history('/')}} 
        sx={customStyles.title} variant='h6'>
          Crypto-Hunter
        </Typography>
        <Select
        variant = "outlined" sx = {customStyles.menu}
        value={currency} 
        onChange = {(e) => setCurrency(e.target.value)}>
          <MenuItem value = {"USD"} className = "menuItem">USD</MenuItem>
          <MenuItem value = {"INR"} className = "menuItem">INR</MenuItem>
        </Select>
      </Toolbar>
    </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header