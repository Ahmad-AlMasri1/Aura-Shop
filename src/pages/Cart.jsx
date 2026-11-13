import React from 'react'

import useCart from '../hooks/useCart.jsx';
import useAuthStore from '../store/useAuthStore.jsx';

import { CircularProgress, Typography } from '@mui/material';

export default function Cart() {

    const token = useAuthStore((state) => state.token);

    const {data, isLoading, isError, error} = useCart(); 

    if(!token){
        return <Typography>Please log in to view your cart.</Typography>
    }

    if(isLoading){
    return <CircularProgress/>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
    console.log(data);
    return (
        <>
            {data?.items?.map((item) => (

                <div key={item.id}>
                    <Typography>{item.productName}</Typography>
                    <Typography>{item.count}</Typography>
                    <Typography>${item.totalPrice.toFixed(2)}</Typography>
                </div>
                
            ))}
        </>
    )
}
