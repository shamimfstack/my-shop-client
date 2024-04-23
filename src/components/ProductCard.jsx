
import PropTypes from "prop-types"

export default function ProductCard({product, setCart}) {
  return (
    <div className="border p-5 flex flex-col justify-center items-center gap-4" key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button className="w-1/2 bg-green-800 text-white font-bold py-1 rounded-sm" onClick={() => setCart((cart) => [...cart, product])}>
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
    product: PropTypes.object,
    setCart: PropTypes.func
}