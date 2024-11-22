import { useState } from "react";

const FilterBar = ({ applyFilters }) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleFilter = () => {
    applyFilters(type, status);
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-4 mb-4 flex flex-wrap items-center gap-4'>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className='rounded-md p-1 border border-gray-500 shadow-sm'
      >
        <option value=''>All Types</option>
        <option value='Apartment'>Apartment</option>
        <option value='House'>House</option>
        <option value='Commercial'>Commercial</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className='rounded-md p-1 border border-gray-500 shadow-sm'
      >
        <option value=''>All Statuses</option>
        <option value='Available'>Available</option>
        <option value='Rented'>Rented</option>
      </select>
      <button
        onClick={handleFilter}
        className='bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
