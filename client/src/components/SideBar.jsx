import Filters from './Filters';
import '../components/styles/SideBar.css';

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

export default SideBar;
