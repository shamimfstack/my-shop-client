import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductList from "../../../components/ProductList";
import Cart from "../../../components/Cart";
import products from "../../../../public/product.json"


export default function Home() {
    const [ cart, setCart ] = useState([]);
    // const [ products, setProducts ] = useState([]);

    // fetch("./product.json")
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setProducts(data);
    // })

    console.log(products);

    return (
        <div>
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <h2>Welcome to my store</h2>
            <ProductList products={products} setCart={setCart} />
            <Cart setCart={setCart} />
        </div>
        );
}