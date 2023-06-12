import Filters from './Filters';
import '../components/styles/SideBar.css';
import PropTypes from 'prop-types';

function SideBar({ handleApplyFilters, handleResetFilters }) {
  return (
    <div className='sideBar'>
      <Filters
        onApplyFilters={handleApplyFilters}
        handleResetFilters={handleResetFilters}
      />
    </div>
  );
}

SideBar.propTypes = {
  handleApplyFilters: PropTypes.func.isRequired,
  handleResetFilters: PropTypes.func.isRequired,
};

export default SideBar;
