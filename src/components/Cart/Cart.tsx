import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, IconButton, Box, Paper } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart, removeToCart } from '../../redux/slices/cart.slice'
import { CartProduct } from '../../types/types';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {

  const product = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const addToCartProducts = (item: CartProduct) => {
    dispatch(addToCart(item))
    // console.log(item)
  }

  const removeToCartProduct = (item: CartProduct) => {
    dispatch(removeToCart(item))
  }

  if (!product.length) return 'No Products'

  return (
    <List sx={{ minHeight: "80vh", width: { xs: "100%", md: "80%" }, backgroundColor: "#b5b5b5" }}>
      {
        product.map((item) => (
          <ListItem key={item.id} sx={{ margin: "2% 1px" }}>
            <ListItemAvatar sx={{ margin: { xs: "10px", md: "2%" } }}>
              <Avatar sx={{ width: { xs: "70px", md: "100px" }, height: { xs: "70px", md: "100px" } }} alt="Remy Sharp" src={item.thumbnail} />
            </ListItemAvatar>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", width: "100%" }, alignItems: { xs: "flex-start", md: "center" } }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem", lg: "2rem" } }}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline', fontSize: { xs: "0.8rem", md: "1rem", lg: "1.2rem" } }}
                      component="span"
                      color="text.primary"
                    >
                      {item.brand}
                    </Typography>
                  </>
                }
              />
              <Box>
                <Typography sx={{ fontSize: "1.6rem", margin: { xs: "0px", md: "0 200px 0 0 " } }}>${item.price}</Typography>
              </Box>
            </Box>
            <Paper elevation={3} sx={{ width: "fit-content", height: "fit-content" }}>
              <Box component="div" sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
                <IconButton onClick={()=>removeToCartProduct(item)}>
                  remove
                  {/* <RemoveIcon /> */}
                </IconButton>
                <Typography>
                  {item.amount}
                </Typography>
                <IconButton onClick={() => addToCartProducts(item)}>
                  add
                  {/* <AddIcon /> */}
                </IconButton>
              </Box>
            </Paper>
          </ListItem>
        ))
      }
    </List>
  );
}