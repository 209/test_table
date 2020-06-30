import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'ui/Modal';
import Tabs, { Tab } from 'ui/Tabs';
import TextInput from 'ui/TextInput';
import Button from 'ui/Button';

function RecordModal(props) {
  const { onApply, onClose, record } = props;
  const [name, setName] = useState(record ? record.name : '');
  const [email, setEmail] = useState(record ? record.email : '');
  const [phone, setPhone] = useState(record ? record.phone : '');

  const handleChangeName = ({ currentTarget: { value } }) => setName(value);
  const handleChangeEmail = ({ currentTarget: { value } }) => setEmail(value);
  const handleChangePhone = ({ currentTarget: { value } }) => setPhone(value);

  const handleAdd = () => {
    if (record) {
      onApply({ ...record, name, email, phone }, true);
    } else {
      onApply({ name, email, phone, id: Date.now() }, false);
    }
  };
  const handleClose = () => onClose();

  return (
    <Modal onClose={handleClose}>
      <Tabs>
        <Tab tabTitle="Name">
          <TextInput value={name} onChange={handleChangeName} />
        </Tab>
        <Tab tabTitle="Email">
          <TextInput value={email} onChange={handleChangeEmail} />
        </Tab>
        <Tab tabTitle="Phone">
          <TextInput value={phone} onChange={handleChangePhone} />
        </Tab>
      </Tabs>
      <div style={{ padding: '0 10px 0 10px', marginTop: 30 }}>
        <Button onClick={handleAdd}>{record ? 'Save' : 'Add'}</Button>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
}
RecordModal.propTypes = {
  record: PropTypes.object,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RecordModal;
