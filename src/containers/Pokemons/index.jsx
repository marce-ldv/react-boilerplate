import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from 'core/Pokemons/actions';
import { getPokemonsSelector } from 'core/Pokemons/selectors';
import Table from 'components/Table';
import { pokeColumns } from './columns';

const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const pokemons = useSelector(state => getPokemonsSelector(state));

  return (
    <>
      <h1>Pokemons:</h1>
      <Table data={pokemons} columns={pokeColumns} />
    </>
  );
};

export default Pokemons;
