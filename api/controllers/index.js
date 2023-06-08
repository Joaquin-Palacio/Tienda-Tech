const products = require('../utils/db.json');

const getProducts = (req, res) => {
  try {
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(400).json({ message: 'Products Not Found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error in server' });
  }
};

const getFilteredProducts = (req, res) => {
  const { category, minPrice, maxPrice, condition } = req.query;
  const filters = {
    minPrice: 0,
    maxPrice: Infinity,
  };
  if (category) filters.category = category;
  if (condition) filters.condition = condition;
  if (minPrice) filters.minPrice = parseFloat(minPrice);
  if (maxPrice) filters.maxPrice = parseFloat(maxPrice);

  const filteredProducts = products.filter((product) => {
    for (const key in filters) {
      if (key === 'minPrice' && product.price < filters.minPrice) {
        return false;
      }
      if (key === 'maxPrice' && product.price > filters.maxPrice) {
        return false;
      }
      if (
        key !== 'maxPrice' &&
        key !== 'minPrice' &&
        product[key] !== filters[key]
      ) {
        return false;
      }
    }
    return true;
  });
  res.status(200).json(filteredProducts);
};

module.exports = {
  getProducts,
  getFilteredProducts,
};
