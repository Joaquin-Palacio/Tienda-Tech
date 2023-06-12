import PropTypes from 'prop-types';
import '../components/styles/Product.css';

export const Product = ({ product }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} className='card-image' />
      <h2 className='card-title'>{product.title}</h2>
      <p className='card-info'>Condition: {product.condition}</p>
      <p className='card-category'>
        Category: {capitalizeFirstLetter(product.category)}
      </p>
      <p className='card-info'>Stock: {product.stock}</p>
      <p className='card-price'>${product.price}</p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
