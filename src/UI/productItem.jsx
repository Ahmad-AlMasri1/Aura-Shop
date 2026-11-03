import React from 'react'
//Design
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

//Router
import { Link } from 'react-router-dom'

export default function productItem({product}) {
  return (
    <Card sx={{position:'relative',borderRadius:1.5 ,}}>
        <CardActionArea  component={Link} to={`/product/${product.id}`}>
            <CardMedia
                component="img"
                image={product.image}
                sx={{ display:'flex',justifyContent:'center' , margin:'0 auto',alignItems:'center','&:hover':{transform:'scale(1.05)',transition:'transform 0.6s ease-in-out',}}}
                >
            </CardMedia>

            <CardContent sx={{display:"flex", flexDirection:"column" , alignItems:"start" }}>

                <Typography component="h2" sx={{fontSize:{xs:"13px",sm:"16px"},mb:4}} color='primary' noWrap >
                    {product.name}
                </Typography>

                <Typography component="h2">
                    ${product.price}
                </Typography>
                    
            </CardContent>
        </CardActionArea>          
    </Card>
  )
}
