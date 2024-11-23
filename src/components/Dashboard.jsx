import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import AddPropertyForm from "./AddPropertyForm";
import FilterBar from "./FilterBar";
import KeyMetrics from "./KeyMetrics";
import { initialProperties } from "../constants";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    // set property data on localStorage
    if (!localStorage.getItem("properties")) {
      localStorage.setItem("properties", JSON.stringify(initialProperties));
    }

    const storedProperties = JSON.parse(localStorage.getItem("properties"));

    if (storedProperties.length) {
      setProperties(storedProperties);
      setFilteredProperties(storedProperties);
    }
  }, []);

  const addProperty = (newProperty) => {
    const propertyWithId = { ...newProperty, id: properties.length + 1 };
    setProperties([...properties, propertyWithId]);
    setFilteredProperties([...filteredProperties, propertyWithId]);

    const storedProperties = JSON.parse(localStorage.getItem("properties"));

    const updatedProperties = [...storedProperties, propertyWithId];
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
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
};
export default Dashboard;
