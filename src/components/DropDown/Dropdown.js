import React from 'react';

const Dropdown = () => {
  const reportFrequency = ['Weekly', 'Bi-Weekly', 'Monthly', 'Bi-Monthly'];
  // console.log({ value });

  // Check if the value prop exists in the reportFrequency array
  // const selectedValue = reportFrequency.includes(value) ? value : '';

  const handleReportFrequency = (event) => {
    // setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <select onChange={handleReportFrequency}>
        <option disabled>Report Frequency</option>
        {reportFrequency.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
