import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaArrowRight } from "react-icons/fa";
import './home.css';
import HexUser from '../HexUser';
import HexBus from '../HexBus'; 
import { Link } from 'react-router-dom';
import LeftPanel from '../LeftPanel';


const theme = createTheme();

export default function Home() {


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

            <div>
            <p className='textRight'>Already have an account? <Link to='/signin' style={{color: "#1565D8"}}>Sign In</Link></p>
            </div>

            <div style={{margin: '20px 0px'}}>
              <h1>Join Us!</h1>
              <p className='textLeft'>To begin this journey, tell us what type of<br/> account you’d be opening.</p>
            </div>

            {/* // first account box */}

            <div className='accBox' style={{border: "1px solid #1565D8", background: "#F5F9FF",justifyContent: "left" }}>
              <div className='boxIcon1'>
                <HexUser />
              </div>

              <div style={{padding: "0px 50px"}}>
                <p style={{margin: '4px 0px'}}><b>Indivisual</b></p>
                <p className="textLeft" style={{fontSize: "14px", fontWeight: "400px", margin: '0px'}}>Personal account to manage all you activities.</p>
              </div>

              <div className='boxIcon2'>
                <FaArrowRight />
              </div>
            </div>

            {/* // second account box */}

            <div className='accBox' style={{ justifyContent: "left"}}>
              <div className='boxIcon1'>
              <HexBus />

              </div>

              <div style={{padding: "0px 50px"}}>
                <p style={{margin: '4px 0px'}}><b>Business</b></p>
                <p className="textLeft" style={{fontSize: "14px", fontWeight: "400px", margin: '0px'}}>Own or belong to a company, this is<br/> for you.</p>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}