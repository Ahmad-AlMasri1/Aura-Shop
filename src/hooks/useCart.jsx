import React from 'react'

import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstace.js';

import useAuthStore from '../store/useAuthStore';

export default function useCart() {

    const token = useAuthStore((state) => state.token);

    const getItems = async ()=>{
        const response = await authAxiosInstance.get(`/Carts`);
        return response.data;
    }

    const query = useQuery({
        queryKey: ['cart', 'en'],
        queryFn: getItems,
        enabled: !!token,
        staleTime: 1000 * 60 * 5,
    })
    return query;
  
}
