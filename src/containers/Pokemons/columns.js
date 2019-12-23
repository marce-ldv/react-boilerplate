import React from 'react';

export const pokeColumns = [
  {
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: row => (!row.value ? <>-</> : row.value),
      },
      {
        Header: 'Url',
        accessor: 'url',
        Cell: row => (!row.value ? <>-</> : row.value),
      },
    ],
  },
];
