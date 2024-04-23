import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

// eslint-disable-next-line react/prop-types
export default function ProductList({products, setCart}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            { products?.map(product => (
                <ProductCard key={product.id} product={product} setCart={setCart} />
            ))}
        </div>
        );


}

ProductList.propTypes = {
    products: PropTypes.array
}