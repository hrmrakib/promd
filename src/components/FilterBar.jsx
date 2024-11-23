import { useEffect, useState } from "react";
import Greeting from "./Greeting";

const FilterBar = ({ applyFilters }) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    applyFilters(type, status);
  }, [type, status]);

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

      <Greeting />
    </div>
  );
};

export default FilterBar;
