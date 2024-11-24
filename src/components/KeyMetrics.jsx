const KeyMetrics = ({ properties }) => {
  const totalProperties = properties.length;

  const availableProperties = properties.filter(
    (p) => p.status === "Available"
  ).length;

  const rentedProperties = properties.filter(
    (p) => p.status === "Rented"
  ).length;

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4'>
      <h2 className='text-xl dark:text-gray-200 font-semibold mb-4'>
        Key Metrics
      </h2>
      <div className='grid grid-cols-3 gap-4 text-center'>
        <div>
          <p className='text-2xl font-bold text-indigo-600'>
            {totalProperties}
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-200'>
            Total Properties
          </p>
        </div>
        <div>
          <p className='text-2xl font-bold text-green-600'>
            {availableProperties}
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-200'>Available</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-red-600'>{rentedProperties}</p>
          <p className='text-sm text-gray-600 dark:text-gray-200'>Rented</p>
        </div>
      </div>
    </div>
  );
};
export default KeyMetrics;
