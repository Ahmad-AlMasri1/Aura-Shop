import React from 'react'

//Design
import { Grid } from '@mui/material'

//Hooks

import { useNavigate } from 'react-router-dom';
import useProduct from '../hooks/useProducts.jsx';

//Items

import ProductItem from '../UI/productItem';

export default function Products({sortBy , order , min , max , byCategory}) {

    const navigate = useNavigate();
    const {data, isLoading, isError,error} = useProduct({sortBy , order , min , max , byCategory});
    
    if(isLoading)return <div>Loading...</div>

    if(isError)return <div>{error.message}</div>

    console.log(data);
  return (
    <Grid container spacing={2}>
        {data?.map((product)=>(
          <Grid size={4}>
            <ProductItem key={product.id} product={product} />
          </Grid>  
        ))}
    </Grid>
  )
}
