import React from 'react'

import { Container , Box , Typography, Button} from '@mui/material';

import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails.jsx';
import useAddToCart from '../hooks/useAddToCart.jsx';
import useAuthStore from '../store/useAuthStore.jsx';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
    
    const token = useAuthStore((state) => state.token);

    const navigate = useNavigate();

    const {mutate : addToCart} = useAddToCart();

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
            <Button  onClick={() => {token ? addToCart({ productId: data?.id, count: 1 }) : navigate('/login')}}>Add to Cart</Button>
          
        </Container>
  )
}
