import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClientProvider , QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@emotion/react'
import getTheme from './theme'

import useThemeStore from './store/useThemeStore'
import { CssBaseline } from '@mui/material'

export default function App() {

  const mode = useThemeStore((state) => state.mode);

  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={getTheme(mode)}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <RouterProvider router={router} />
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
