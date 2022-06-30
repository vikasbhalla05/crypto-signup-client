import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signin.css';
import LeftPanel from '../LeftPanel';
import ParentForm from './FormBlocks/ParentForm';


const theme = createTheme();

export default function SignIn() {


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{

            background: "linear-gradient(0deg, rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)), url(https://source.unsplash.com/random)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}

          
        >

          <LeftPanel />
            
        </Grid>

        
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box

          className='rightSide'
            sx={{
              // my: 8,
              margin: "10vh 10vw 5vh 10vw",
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
            }}
          > 


            <ParentForm />

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}