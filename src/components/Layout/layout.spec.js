import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Layout />', () => {
  test('should render Layout without crashing', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout component={jest.fn()}/>
      </Router>
    );
  });
});
