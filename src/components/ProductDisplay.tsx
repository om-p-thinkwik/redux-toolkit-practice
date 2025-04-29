import { Box, Typography } from '@mui/material'
import ProductCard from './ProductCard'
import products from '../assets/products.json'
import { useSelector } from 'react-redux'
import { getItemsSelector } from '../redux/slices/cartSlice'
import { ItemTypes } from '../types/types'

const ProductDisplay = () => {
  const cartItems = useSelector(getItemsSelector)
  const uniqueItemsMap = new Map<string, ItemTypes>()
  cartItems.forEach((item: { name: string; price: number }) => {
    uniqueItemsMap.set(item.name, item)
  })
  const uniqueItems = Array.from(uniqueItemsMap.values())
  console.log('Items...', uniqueItems)

  const total = uniqueItems.reduce((a, b) => a + b.price, 0)

  const cartItemNames = uniqueItems.map((item) => item.name)

  return (
    <Box>
      <Typography>
        Items in Cart: [{cartItemNames}], <br />
        Total Items:{uniqueItems.length}, Net Amount: {total}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', p: 2 }}>
        {products && products.map((product) => <ProductCard {...product} />)}
      </Box>
    </Box>
  )
}

export default ProductDisplay
