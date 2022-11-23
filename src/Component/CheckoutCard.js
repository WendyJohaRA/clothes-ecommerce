import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { ClassNames } from '@emotion/react';
import accounting from "accounting"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



export default function CheckoutCard({
    product: Id, Nombre, TipoProducto, Imagen, Precio, Rating, Descripcion
}) {



  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    Id: Id,
  })
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
          className={ClassNames.action}
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
      
      <CardActions disableSpacing >
       
        
        <div className={styled.cardRating}>
          {Array(Rating)
          .fill()
          .map((_,i) => (
            <p>&#11088;</p>
          ))}
        </div>
        <IconButton>
        <DeleteIcon fontSize='large' onClick={removeItem}/>
      </IconButton>

      </CardActions>

    </Card>
    
  );
}

