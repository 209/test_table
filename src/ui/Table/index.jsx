import React from 'react';
import PropTypes from 'prop-types';

const tableStyle = {
  width: '100%',
  border: '1px solid #999',
  borderCollapse: 'collapse',
};
const theadStyle = {
  fontWeight: 'bold',
  textAlign: 'left',
};
const thStyle = {
  border: '1px solid #999',
  padding: 5,
};
const tdStyle = {
  border: '1px solid #999',
  padding: 5,
};

function Table(props) {
  const { header, rows } = props;

  const columnsFields = header.map((item) => ({
    field: item.field,
    render: item.render,
  }));

  return (
    <table style={tableStyle}>
      <thead style={theadStyle}>
        <tr>
          {header.map((item) => (
            <th style={thStyle} key={item.id}>
              {item.title}
            </th>
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
                return (
                  <td style={tdStyle} key={key}>
                    {render(record, recordIndex)}
                  </td>
                );
              }
              return (
                <td style={tdStyle} key={key}>
                  {record[field]}
                </td>
              );
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
