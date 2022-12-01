import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/ConfigureStore';
import PicturesDisplay from '../../pages/MainPage';

describe('the MainPage snapshot', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <PicturesDisplay />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});