const PropertyCard = ({ property }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
      <h3 className='text-xl dark:text-gray-200 font-semibold mb-2'>
        {property.name}
      </h3>
      <p className='text-gray-600 dark:text-gray-200 mb-2'>
        {property.address}
      </p>
      <div className='flex justify-between items-center'>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            property.type === "Apartment"
              ? "bg-blue-200 text-blue-800"
              : property.type === "House"
              ? "bg-green-200 text-green-800"
              : "bg-purple-200 text-purple-800"
          }`}
        >
          {property.type}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            property.status === "Available"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {property.status}
        </span>
      </div>
    </div>
  );
};
export default PropertyCard;
