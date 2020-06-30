import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PersonsContext } from 'contexts/persons';
import RecordModal from 'components/RecordModal';

function PersonsRecordModal({ recordEdit, onClose, isModalOpen }) {
  const context = useContext(PersonsContext);
  if (!isModalOpen) {
    return null;
  }

  const handleApplyRecord = (record, isEdit) => {
    if (isEdit) {
      context.update(record);
    } else {
      context.add(record);
    }
    onClose();
  };

  return (
    <RecordModal
      record={recordEdit}
      onApply={handleApplyRecord}
      onClose={onClose}
    />
  );
}

PersonsRecordModal.propTypes = {
  recordEdit: PropTypes.object,
  isModalOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default PersonsRecordModal;
