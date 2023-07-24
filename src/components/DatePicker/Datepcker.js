import React from 'react';

const Datepcker = ({ label, handleChange, name }) => {
  return (
    <div className="date-picker">
      <input
        type="text"
        name={name}
        className="date-input"
        placeholder={label}
        onChange={handleChange}
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
      />
    </div>
  );
};

export default Datepcker;
