import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const PersonsContext = React.createContext(null);
const saveRecordsToStorage = (records) => {
  window.localStorage.setItem('records', JSON.stringify(records));
};

function PersonsProvider(props) {
  const [records, setRecords] = useState([]);
  const updateRecords = (recs) => {
    setRecords(recs);
    saveRecordsToStorage(recs);
  };

  useEffect(() => {
    const savedRecords = window.localStorage.getItem('records');
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  return (
    <PersonsContext.Provider
      value={{
        records,
        remove: (id) => {
          const newRecords = records.filter((item) => item.id !== id);
          updateRecords(newRecords);
        },
        update: (record) => {
          const newRecords = records.map((item) => {
            if (item.id === record.id) {
              return record;
            }
            return item;
          });
          updateRecords(newRecords);
        },
        add: (record) => {
          updateRecords([...records, record]);
        },
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
}
PersonsProvider.propTypes = {
  children: PropTypes.node,
};

export { PersonsContext };
export default PersonsProvider;
