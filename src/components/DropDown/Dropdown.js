import React from 'react';

const Dropdown = ({ handleOnChange }) => {
  const reportFrequency = ['Weekly', 'Bi-Weekly', 'Monthly', 'Bi-Monthly'];

  return (
    <>
      <select onChange={handleOnChange} defaultValue="">
        <option value="" disabled hidden>
          Report Frequency
        </option>
        {reportFrequency.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
