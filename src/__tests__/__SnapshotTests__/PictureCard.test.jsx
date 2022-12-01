import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/ConfigureStore';
import Picture from '../../components/PictureCard';

describe('the PictureCard snapshot', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Picture />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});