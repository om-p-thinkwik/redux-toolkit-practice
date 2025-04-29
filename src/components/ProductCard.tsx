import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { addItem, removeItem } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { PropTypes } from '../types/types'

export default function MediaCard(props: PropTypes) {
  const dispatch = useDispatch()

  return (
    <Card key={props.id} sx={{ width: '18%', minWidth: 200 }}>
      <CardMedia component="img" height="140" image={props.image_url} alt={props.product_name} />
      <CardContent>
        <Typography gutterBottom variant="h6" noWrap>
          {props.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => dispatch(addItem({ name: props.product_name, price: props.price }))}
        >
          Add
        </Button>
        <Button size="small" variant="outlined" onClick={() => dispatch(removeItem({ name: props.product_name }))}>
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}
