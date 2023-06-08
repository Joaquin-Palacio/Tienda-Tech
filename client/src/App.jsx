import { useState, useEffect } from 'react';
import ProductList from './components/ProductList'
import SideBar from './components/Sidebar';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, []);

  const handleApplyFilters = (filters) => {
    let url = 'http://localhost:8001/products/filtered?';
    if (filters.category) url = url.concat(`category=${filters.category}&`);
    if (filters.condition) url = url.concat(`condition=${filters.condition}&`);
    if (filters.minPrice) url = url.concat(`minPrice=${filters.minPrice}&`);
    if (filters.maxPrice) url = url.concat(`maxPrice=${filters.maxPrice}&`);
    if (url[url.length - 1] === '&' || url[url.length - 1] === '?')
      url = url.slice(0, -1);
    fetch(url)
      .then((res) => res.json())
      .then((dta) => setProducts(dta))
      .catch((err) => console.log({ message: err }));
  };

  function handleResetFilters() {
    fetch('http://localhost:8001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
  return (
    <div className='App'>
      <SideBar
        handleApplyFilters={handleApplyFilters}
        handleResetFilters={handleResetFilters}
      />
      <ProductList products={products} />
    </div>
  );
}

export default App;
