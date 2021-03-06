import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, makeStyles, Typography} from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';

//components
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        // [theme.breakpoints.down('sm')]: {
        //     padding: '15px 0'
        // }
    },
    leftComponent: {
        width: '67%',
        // paddingRight: 15,
        // [theme.breakpoints.down('sm')]: {
        //     marginBottom: 15
        // }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    placeOrder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto'
    },
    bottom: {
      padding: '16px 22px',
      background: '#fff',
      borderTop: '1px solid #f0f0f0',
      boxShadow: '0 2px 10px 0 rgb(0 0 0/10%)'
    }
})

const Cart = () => {
    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        // if(cartItems && match.params.id !== cartItems.id)   
        //     dispatch(addToCart(match.params.id));
        console.log(cartItems);
    });

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <>
            {
                cartItems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart  ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button className={classes.placeOrder} variant="contained">Place Order</Button>
                            </Box>
                        </Box>
                       
                           <TotalView cartItems={cartItems}/>
                      
                        
                    </Box>

                    : <EmptyCart/>
            }
        </>
    )
}

export default Cart;