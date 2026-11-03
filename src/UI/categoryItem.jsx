import React from 'react'

//Design
import { Chip } from '@mui/material'

export default function categoryItem({category}) {
  return (
    <Chip label={category.name} clickable/>
  )
}
