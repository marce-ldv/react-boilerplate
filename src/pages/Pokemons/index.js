import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'components/Table';
import { pokeColumns } from './columns';
import { getPokemonList } from 'core/Pokemons/thunks';
import { getPokemonsSelector } from 'core/Pokemons/selectors';
import { useTranslation } from 'react-i18next';

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => getPokemonsSelector(state));
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  return (
    <>
      <h2>{t('common.products')}</h2>
      <Table data={pokemons} columns={pokeColumns} />
    </>
  );
};

export default Pokemons;
