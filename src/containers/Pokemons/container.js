import { connect } from 'react-redux';
import { getPokemonList } from 'core/Pokemons/actions';
import { getPokemonsSelector } from 'core/Pokemons/selectors';
import Pokemons from './main';

const mapStateToProps = state => {
  return {
    pokemons: getPokemonsSelector(state),
  };
};

const mapDispatchToProps = {
  getPokemonList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
