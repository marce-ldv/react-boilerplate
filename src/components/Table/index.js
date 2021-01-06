import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

const Table = ({ columns, data, handleClick, isPagination, defaultPageSize }) => {
  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize ? defaultPageSize : 7}
      className="-striped -highlight"
      getTdProps={(state, rowInfo) => {
        return {
          onClick: () => handleClick && handleClick(rowInfo),
          style: {
            textAlign: 'center',
            cursor: 'pointer',
          },
        };
      }}
      showPagination={isPagination}
      NoDataComponent={() => null}
    />
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  isPagination: PropTypes.bool,
  defaultPageSize: PropTypes.number,
};
