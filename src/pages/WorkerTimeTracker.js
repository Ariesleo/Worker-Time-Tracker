import React, { useEffect, useState } from 'react';
import Datepcker from '../components/DatePicker/Datepcker';
import Dropdown from '../components/DropDown/Dropdown';
import Table from '../components/Table/Table';

const WorkerTimeTracker = () => {
  const [selectedOption, setSelectedOption] = useState('2019-09-03');
  const [startDate, setStartDate] = useState('2019-09-04');
  const [endDate, setEndDate] = useState('Weekly');

  const handleStartDate = (e) => {
    console.log(e.target.value);
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    console.log(e.target.value);
    setEndDate(e.target.value);
  };
  const handleReportFrequency = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  // on every update
  useEffect(() => {
    if (!selectedOption || !startDate || !endDate) {
      console.log('one of the params is missing');
    } else {
      // call a function that will handle the workers time Traker data
    }
  }, [selectedOption, startDate, endDate]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '2%',
        }}
      >
        {/* <p>{datePicker}</p> */}
        <Datepcker
          label="Select Start Date"
          name="startDate"
          handleChange={handleStartDate}
        />
        <Datepcker
          label="Select End Date"
          name="endDate"
          handleChange={handleEndDate}
        />
        <Dropdown handleOnChnage={handleReportFrequency} />
        {/* seperate component for the data display like table component */}
      </div>
      <Table />
    </>
  );
};

export default WorkerTimeTracker;
