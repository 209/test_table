import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { header, rows } = props;

  const columnsFields = header.map((item) => ({
    field: item.field,
    render: item.render,
  }));

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => (
            <th key={item.id}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((record, recordIndex) => (
          <tr key={record.id}>
            {columnsFields.map((item) => {
              const { field, render } = item;

              const key = `td_${record.id}_${field}`;
              if (render) {
                return <td key={key}>{render(record, recordIndex)}</td>;
              }
              return <td key={key}>{record[field]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  header: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Table;
