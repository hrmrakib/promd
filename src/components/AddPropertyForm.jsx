import React, { useState } from "react";

export default function AddPropertyForm({ addProperty }) {
  const [property, setProperty] = useState({
    name: "",
    type: "Apartment",
    status: "Available",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(property);
    setProperty({
      name: "",
      type: "Apartment",
      status: "Available",
      address: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white rounded-lg shadow-md p-4 mt-4'
    >
      <h2 className='text-xl font-semibold mb-4'>Add New Property</h2>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={property.name}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='type'
          className='block text-sm font-medium text-gray-700'
        >
          Type
        </label>
        <select
          id='type'
          name='type'
          value={property.type}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-500 shadow-sm'
        >
          <option value='Apartment'>Apartment</option>
          <option value='House'>House</option>
          <option value='Commercial'>Commercial</option>
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='status'
          className='block text-sm font-medium text-gray-700'
        >
          Status
        </label>
        <select
          id='status'
          name='status'
          value={property.status}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-500 shadow-sm'
        >
          <option value='Available'>Available</option>
          <option value='Rented'>Rented</option>
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='address'
          className='block text-sm font-medium text-gray-700'
        >
          Address
        </label>
        <input
          type='text'
          id='address'
          name='address'
          value={property.address}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
      >
        Add Property
      </button>
    </form>
  );
}
