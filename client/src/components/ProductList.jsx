import Product from './Product';
import '../components/styles/ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;