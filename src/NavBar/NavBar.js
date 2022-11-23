import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from './../assets/img/logo.png'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';





export default function NavBar() {

  const [{basket}, dispatch] = useStateValue();
  return (
    
    <Box sx={{ flexGrow: 1 } }  >
      <AppBar position="static" color="">
        <Toolbar >

          <Link to="/">
          <IconButton>
           <img src={logo} height="30" alt='logo'/>
          </IconButton>
          </Link>

          <Typography   variant="h6" color="textPrimary" component="div" sx={{ flexGrow: 1 }}>
            Hello Guest
          </Typography>

          <Link to="/SingIn">
          <Button color="inherit" variant="outlined">
            <strong> Sign In </strong>
            </Button>
          </Link>

          <Link to="checkout-page">
          <IconButton aria-label='show cart items' color="inherit">
            <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCartIcon fontSize="large" color="primary"/>
                </Badge>
          </IconButton>
          </Link>
          
        </Toolbar>
      </AppBar>
      </Box>
    
  );
}
