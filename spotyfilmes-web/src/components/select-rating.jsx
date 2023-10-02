import React, { useState } from "react";

export default function SelectRating({ name, ...props }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="select-rating">
      <div className="flex items-center">
        <select
          name={name}
          value={selectedValue}
          onChange={handleInputChange}
          className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500 placeholder-orange-500"
          {...props}
        >
          <option value="" disabled hidden>
            Classificação:
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
}
