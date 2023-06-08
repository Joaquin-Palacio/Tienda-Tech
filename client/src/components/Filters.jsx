import { useState } from 'react';
import '../components/styles/Filters.css';

const categoryOptions = [
  'cell_phone',
  'memory',
  'clock',
  'ipad',
  'iphone',
  'tablet',
  'printer',
  'headphone',
];

function Filters({ onApplyFilters, handleResetFilters }) {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategoryFilter(value);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    let filteredValue = value;

    if (name === 'minPrice') {
      if (value < 0) {
        filteredValue = '';
      }
      setMinPriceFilter(filteredValue);
    } else if (name === 'maxPrice') {
      if (value < 0) {
        filteredValue = '';
      }
      setMaxPriceFilter(filteredValue);
    }
    /*   const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPriceFilter(value);
    } else if (name === 'maxPrice') {
      setMaxPriceFilter(value);
    } */
  };

  const handleConditionChange = (event) => {
    const { value } = event.target;
    setConditionFilter(value);
  };

  const handleApplyFilters = () => {
    const filters = {
      category: categoryFilter,
      condition: conditionFilter,
      minPrice: minPriceFilter,
      maxPrice: maxPriceFilter,
    };
    onApplyFilters(filters);
  };
  const resetFilters = () => {
    handleResetFilters();
    setCategoryFilter('');
    setMinPriceFilter('');
    setMaxPriceFilter('');
    setConditionFilter('');
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='Filters'>
      <h2>Filters</h2>
      <div className='filterSection'>
        <h3>Category</h3>
        {categoryOptions.map((option) => (
          <label key={option}>
            <input
              type='radio'
              name='category'
              value={option}
              checked={categoryFilter === option}
              onChange={handleCategoryChange}
            />
            {capitalizeFirstLetter(option)}
          </label>
        ))}
      </div>
      <div className='filterSection'>
        <h3>Price</h3>
        <label>
          Min Price:
          <input
            type='number'
            name='minPrice'
            value={minPriceFilter}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Max Price:
          <input
            type='number'
            name='maxPrice'
            value={maxPriceFilter}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className='filterSection'>
        <h3>Condition</h3>
        <label>
          <input
            type='radio'
            name='condition'
            value='new'
            checked={conditionFilter === 'new'}
            onChange={handleConditionChange}
          />
          New
        </label>
        <label>
          <input
            type='radio'
            name='condition'
            value='used'
            checked={conditionFilter === 'used'}
            onChange={handleConditionChange}
          />
          Used
        </label>
      </div>
      <div className='buttonSection'>
        <button onClick={handleApplyFilters}>Apply Filters</button>
        <button className='button2' onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
