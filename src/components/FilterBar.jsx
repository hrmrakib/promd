import { useEffect, useState } from "react";
import Greeting from "./other/Greeting";
import Time from "./other/Time";

const FilterBar = ({ applyFilters }) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    applyFilters(type, status);
  }, [type, status]);

  return (
    <div className='relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex flex-wrap items-center gap-4'>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className='rounded-md p-1 border dark:bg-gray-800 dark:text-gray-200 border-gray-500 shadow-sm'
      >
        <option value=''>All Types</option>
        <option value='Apartment'>Apartment</option>
        <option value='House'>House</option>
        <option value='Commercial'>Commercial</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className='rounded-md p-1 border dark:bg-gray-800 dark:text-gray-200 border-gray-500 shadow-sm'
      >
        <option value=''>All Statuses</option>
        <option value='Available'>Available</option>
        <option value='Rented'>Rented</option>
      </select>

      <Greeting />
      <Time />
    </div>
  );
};

export default FilterBar;
