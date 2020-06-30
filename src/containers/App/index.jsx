import React, { useState } from 'react';
import PersonsRecordModal from 'containers/PersonsRecordModal';
import PersonTable from 'containers/PersonsTable';
import PersonsProvider from 'contexts/persons';
import Button from 'ui/Button';

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};
const contentStyle = {
  marginTop: '30',
  width: '60%',
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [recordEdit, setRecordEdit] = useState(null);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setRecordEdit(null);
  };
  const editRecord = (record) => {
    setRecordEdit(record);
    setModalOpen(true);
  };

  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        <h1>App</h1>
        <Button onClick={handleOpenModal}>Add record</Button>
        <PersonsProvider>
          <PersonsRecordModal
            isModalOpen={isModalOpen}
            recordEdit={recordEdit}
            onClose={handleCloseModal}
          />
          <PersonTable onEdit={editRecord} />
        </PersonsProvider>
      </div>
    </div>
  );
}

export default App;
