import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from 'core/Pokemons/actions';
import { getPokemonsSelector } from 'core/Pokemons/selectors';

const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const pokemons = useSelector(state => getPokemonsSelector(state));

  return (
    <>
      <div>Pokemons: {pokemons}</div>
    </>
  );
};

export default Pokemons;
