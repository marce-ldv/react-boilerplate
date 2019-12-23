import React, { useEffect } from 'react';
import Table from 'components/Table';
import { pokeColumns } from './columns';

const Pokemons = props => {
  useEffect(() => {
    props.getPokemonList();
  }, [props]);

  return (
    <>
      <h1>Pokemons:</h1>
      <Table data={props.pokemons} columns={pokeColumns} />
    </>
  );
};

export default Pokemons;
