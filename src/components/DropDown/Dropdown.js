import React from 'react';

const Dropdown = ({ handleOnChnage }) => {
  const reportFrequency = ['Weekly', 'Bi-Weekly', 'Monthly', 'Bi-Monthly'];

  return (
    <>
      <select onChange={handleOnChnage} defaultValue="">
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
