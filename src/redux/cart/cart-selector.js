import { createSelector } from 'reselect';
// this basically takes in two arguments, first argument is an array of input , second argument is a function that will return the value that we want out of a particular selector and its parameter is basically accessing the input of the input array.

const selectCart = state => state.cart 
// this code selects the cart reducer alone from the root 

export const selectCartItems = createSelector([selectCart],(cart) =>

    cart.cartItems

) 

export const selectCartToggle = createSelector([selectCart],(toggle) => toggle.hidden)

// the second variable 'cart, toggle' is what is being accessed in selectCart, similar method shown below.

export const selectCartCount = createSelector([selectCartItems],cartItems =>

    cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0)

)

export const selectCartTotal = createSelector([selectCartItems],cartItems =>
    
        cartItems.reduce((accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
    
    )

// here it is getting selectcartitems as the input so every cart item is passed in , instead of the entire reducer being passed in through selectCart.
