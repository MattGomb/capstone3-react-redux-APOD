import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import PicturesDisplay from '../pages/MainPage';

describe('the MissionCard snapshot and react testing library', () => {
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