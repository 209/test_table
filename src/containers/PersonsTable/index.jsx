import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PersonsContext } from 'contexts/persons';
import ButtonIcon from 'ui/ButtonIcon';
import EditIcon from 'ui/Icon/Edit';
import RemoveIcon from 'ui/Icon/Remove';
import Table from 'ui/Table';

function PersonTable({ onEdit }) {
  const context = useContext(PersonsContext);
  const { records } = context;

  const handleEditRecord = (record) => onEdit(record);
  const handleRemoveRecord = (id) => {
    const isRemove = window.confirm('Are you sure');
    if (isRemove) {
      context.remove(id);
    }
  };

  return (
    <Table
      header={[
        { id: 'name', field: 'name', title: 'Name' },
        { id: 'email', field: 'email', title: 'Email' },
        { id: 'phone', field: 'phone', title: 'Phone' },
        {
          id: 'actions',
          title: 'Action',
          render: (record) => {
            const handleEdit = () => handleEditRecord(record);
            const handleRemove = () => handleRemoveRecord(record.id);

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
  );
}

PersonTable.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default PersonTable;
