import React from 'react'
// React Query
import { useQuery } from '@tanstack/react-query';

//API
import axiosInstance from '../api/axiosInstance';

export default function useProductDetails(id) {
    
    const getProductDetails = async()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        return response?.data?.response;
    }

    const query = useQuery({
        queryKey:['productDetails','en',id],
        queryFn:getProductDetails,
        staleTime:1000 *60 * 5
    })
  return (
    query
  )
}
