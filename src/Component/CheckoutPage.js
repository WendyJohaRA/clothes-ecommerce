import React from 'react';
import { makeStyles } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import { Typography } from '@mui/material';
import { useStateValue } from '../StateProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrown: 1,
        padding: "2rem",
    },
}));



const CheckoutPage = () => {
    const style = useStyles();
    const [{basket}, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard key={item.id} product={item}/>
                 </Grid> 
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={style.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default CheckoutPage;