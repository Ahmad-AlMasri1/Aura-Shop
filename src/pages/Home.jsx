import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'

export default function Home() {
  return (
    <>

      <Categories />
      <Products sortBy={'price'} order={'false'} min={0} max={10000} byCategory={'all'}/>
    
    </>
  )
}
