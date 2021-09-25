import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      const doCartTotal = () => {
        let count = 0
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < cartList.length; i++) {
          count += cartList[i].price * cartList[i].quantity
        }

        return (
          <>
            <h1>Order Total: Rs {count}/-</h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button">Checkout</button>
          </>
        )
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button type="button" onClick={onClickRemoveAllBtn}>
                  Remove All
                </button>
                <CartListView />
                <div>{doCartTotal()}</div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
