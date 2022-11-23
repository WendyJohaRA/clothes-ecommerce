
import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@mui/material'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider';



const useStyles = makeStyles ((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },
    button: {
        marginTop: "2rem"
    }
}))

const Total = () => {
    const style = useStyles() 
    const [{basket}, dispatch] = useStateValue();
  return (
    <div  className={style.root}>
       <h5>Total Productos: {basket?.length}</h5>
       <h5> {accounting.formatMoney(getBasketTotal(basket), "$")} </h5>
       <Button className={style.button} variant="contained" color="secondary">Check out</Button>
    </div>
  )
}

export  default Total;