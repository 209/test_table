import React, { useState, useEffect } from 'react';
import RecordModal from 'components/RecordModal';
import Table from 'ui/Table';
import Button from 'ui/Button';
import ButtonIcon from 'ui/ButtonIcon';
import EditIcon from 'ui/Icon/Edit';
import RemoveIcon from 'ui/Icon/Remove';

const saveRecordsToStorage = (records) => {
  window.localStorage.setItem('records', JSON.stringify(records));
};

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};
const contentStyle = {
  marginTop: '30',
  width: '60%',
};

// @todo: use context
function App() {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [recordEdit, setRecordEdit] = useState(null);

  useEffect(() => {
    const savedRecords = window.localStorage.getItem('records');
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setRecordEdit(null);
  };

  const removeRecord = (id) => {
    const isRemove = window.confirm('Are you sure');
    if (isRemove) {
      const newRecords = records.filter((item) => item.id !== id);
      setRecords(newRecords);
      saveRecordsToStorage(newRecords);
    }
    handleCloseModal();
  };
  const addRecord = (record) => {
    const newRecords = [...records, record];
    setRecords(newRecords);
    saveRecordsToStorage(newRecords);
    handleCloseModal();
  };
  const editRecord = (record) => {
    setRecordEdit(record);
    setModalOpen(true);
  };
  const handleApplyRecord = (record, isEdit) => {
    if (isEdit) {
      const newRecords = records.map((item) => {
        if (item.id === record.id) {
          return record;
        }
        return item;
      });
      setRecords(newRecords);
      saveRecordsToStorage(newRecords);
    } else {
      addRecord(record);
    }

    handleCloseModal();
  };

  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        {isModalOpen && (
          <RecordModal
            record={recordEdit}
            onApply={handleApplyRecord}
            onClose={handleCloseModal}
          />
        )}
        <h1>App</h1>
        <Button onClick={handleOpenModal}>Add</Button>
        <Table
          header={[
            { id: 'name', field: 'name', title: 'Name' },
            { id: 'email', field: 'email', title: 'Email' },
            { id: 'phone', field: 'phone', title: 'Phone' },
            {
              id: 'actions',
              title: 'Actions',
              render: (record) => {
                const handleEdit = () => editRecord(record);
                const handleRemove = () => removeRecord(record.id);

                return (
                  <>
                    <ButtonIcon onClick={handleEdit}>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        alt="edit"
                        src={EditIcon}
                      />
                    </ButtonIcon>
                    <ButtonIcon onClick={handleRemove}>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        alt="remove"
                        src={RemoveIcon}
                      />
                    </ButtonIcon>
                  </>
                );
              },
            },
          ]}
          rows={records}
        />
      </div>
    </div>
  );
}

export default App;
