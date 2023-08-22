import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/ConfigureStore';
import PicturesList from '../../components/PictureCardList';

describe('the PictureCardList snapshot', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <PicturesList />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});