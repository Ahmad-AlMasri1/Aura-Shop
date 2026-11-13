import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstace.js';
import { useQueryClient } from '@tanstack/react-query';
import { toast, Bounce } from 'react-toastify';

export default function useAddToCart() {

    const queryClient = useQueryClient();
    
    return useMutation({

        mutationFn: async (values) => {
            return await authAxiosInstance.post(`/Carts`, {
                ProductId: values.productId,
                Count: values.count});
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success('Product Added Succesfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }

    })

}
