import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from "accounting";
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
//import clsx from 'clsx';
//import { useState } from 'react';
//import Products from './Products';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Product({
  product: {Id, Nombre, TipoProducto, Imagen, Precio, Rating, Descripcion},
}) {

  const style = styled();
  
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        Id,
        Nombre,
        TipoProducto,
        Precio,
        Rating,
        Imagen,
        Descripcion,
      }
    })
  }
  
  return (
    
 
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <Typography
          className={style.action}
          variant='h5'
          color='textSecondary'
          >
            {accounting.formatMoney(Precio, "$")}
          </Typography>
        }
        title={ Nombre }
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="450"
        img src={Imagen} 
        alt="Camisa"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {TipoProducto}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket}>
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>

        <IconButton aria-label="rating">
          {Array(Rating)
          .fill()
          .map((_,i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>DESCRIPCIÓN DEL PRODUCTO:</Typography>
          <Typography paragraph>
          </Typography>
          <Typography>
            {Descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
}


