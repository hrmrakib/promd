import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import AddPropertyForm from "./AddPropertyForm";
import FilterBar from "./FilterBar";
import KeyMetrics from "./KeyMetrics";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const initialProperties = [
      {
        id: 1,
        name: "Lakeside Villa",
        type: "House",
        status: "Available",
        address: "25 Lakeview Dr",
      },
      {
        id: 2,
        name: "Ocean Breeze Apartments",
        type: "Apartment",
        status: "Available",
        address: "332 Shoreline Blvd",
      },
      {
        id: 3,
        name: "Mountain View Cabin",
        type: "House",
        status: "Rented",
        address: "56 Alpine Rd",
      },
      {
        id: 4,
        name: "Urban Studio Loft",
        type: "Apartment",
        status: "Available",
        address: "789 Downtown Ln",
      },
      {
        id: 5,
        name: "Greenwood Office Park",
        type: "Commercial",
        status: "Available",
        address: "400 Corporate Blvd",
      },
      {
        id: 6,
        name: "Coastal Retreat",
        type: "House",
        status: "Rented",
        address: "88 Ocean View Rd",
      },
      {
        id: 7,
        name: "Skyline Tower",
        type: "Apartment",
        status: "Available",
        address: "55 City Heights Ave",
      },
      {
        id: 8,
        name: "Silver Plaza Offices",
        type: "Commercial",
        status: "Rented",
        address: "120 Market St",
      },
      {
        id: 9,
        name: "Country Meadows Cottage",
        type: "House",
        status: "Available",
        address: "305 Countryside Dr",
      },
      {
        id: 10,
        name: "Riverside Complex",
        type: "Apartment",
        status: "Rented",
        address: "160 Riverbank Rd",
      },
    ];

    setProperties(initialProperties);
    setFilteredProperties(initialProperties);
  }, []);

  const addProperty = (newProperty) => {
    const propertyWithId = { ...newProperty, id: properties.length + 1 };
    setProperties([...properties, propertyWithId]);
    setFilteredProperties([...filteredProperties, propertyWithId]);
  };

  const applyFilters = (type, status) => {
    setFilterType(type);
    setFilterStatus(status);
    let filtered = properties;
    if (type) {
      filtered = filtered.filter((property) => property.type === type);
    }
    if (status) {
      filtered = filtered.filter((property) => property.status === status);
    }
    setFilteredProperties(filtered);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='md:col-span-2'>
          <FilterBar applyFilters={applyFilters} />
          <PropertyList properties={filteredProperties} />
        </div>
        <div>
          <KeyMetrics properties={properties} />
          <AddPropertyForm addProperty={addProperty} />
        </div>
      </div>
    </div>
  );
}
