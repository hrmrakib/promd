import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time as HH:MM:SS AM/PM
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;
    setTime(formattedTime);
  };

  useEffect(() => {
    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='absolute top-0 right-5'>
      <p className='text-sm text-gray-700 font-medium'>{time}</p>
    </div>
  );
};

export default Time;
