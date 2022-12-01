import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/ConfigureStore';
import Details from '../../components/PictureCardDetails';

describe('the PictureCardDetails snapshot', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});