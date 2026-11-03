import React from 'react'

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useProductDetails from '../hooks/useProductDetails.jsx';

import { Container , Box , Typography} from '@mui/material';
export default function ProductDetails() {

    const {id} = useParams();

    const {data,isLoading,isError,error} = useProductDetails(id);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error: {error.message}</div>
    }
    
    return (
        <Container>
            <Box>
                <Typography> {data?.name} </Typography>
                <Typography> {data?.description} </Typography>
            </Box>
        </Container>
  )
}
