import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
export default function Cart({cart, setCart}) {
    return (
        <div>
            <h2>Cart</h2>
            {/* { cart.map((product) => {
                <div key={product}>
                    <span>{product.name}</span>
                    <button
                        onClick={() => setCart(cart.filter((productItem) => productItem.id !== product.id))}
                    >Remove</button>
                </div>
            }) }
            { cart.length > 0 && (
                <button onClick={() => setCart([])}>Clear Cart</button>
            )} */}
        </div>
        );
}

Cart.propTypes = {
    cart: PropTypes.array
}


