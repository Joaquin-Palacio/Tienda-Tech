import Product from './Product';
import PropTypes from 'prop-types';
import '../components/styles/ProductList.css';

function ProductList({ products }) {
  return (
    <div className='product-list'>
      <div className='product-container'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
