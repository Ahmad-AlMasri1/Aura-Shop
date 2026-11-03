import React from 'react'

//Design
import { CircularProgress, Typography , Container, Grow , Slide , Box} from '@mui/material'

//Hooks
import useCategories from '../hooks/useCategories'

//Items

import CategoryItem from '../UI/categoryItem'

export default function Categories() {

   

    const {data, isLoading, isError, error} = useCategories();

    if(isLoading)return <CircularProgress />

    if(isError)return <Typography color='red'>{error.message}</Typography>    
  
    return (
        <Container>
            <Typography variant='h4' component='h2' gutterBottom>
                Categories
            </Typography>
            <Grow in={true} timeout={1000} >
                <Box>
                    {data?.response?.data?.map((category)=>(
                        <CategoryItem category={category} />
                    ))} 
                </Box>
            </Grow>
        </Container>
    )
}
      