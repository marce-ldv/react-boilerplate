import React from 'react';
import { render, screen } from '@testing-library/react';
import Pokemons from './index';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from 'core/store.js';

describe('<Pokemons />', () => {
  test('should render Pokemons without crashing', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pokemons />
        </Router>
      </Provider>,
    );
  });

  test('should render Spinner in Pokemons', () => {
    const history = createMemoryHistory();
    let wrapper = render(
      <Provider store={store}>
        <Router history={history}>
          <Pokemons />
        </Router>
      </Provider>,
    );
    const spinner = wrapper.findByRole('progressbar');
    expect(screen.findByRole('progressbar')).toEqual(spinner);
  });
});
