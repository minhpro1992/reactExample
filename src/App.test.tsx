import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import configureStore, { ApplicationState } from './store/configureStore';

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(initialState as ApplicationState);

describe('<App/>', () => {
  test('shoud render App component', async() => {
    render(<App store={store} />)
  })
  test('shoud match snapshot', () => {
    const { asFragment } = render(<App store={store} />);
    expect(asFragment()).toMatchSnapshot();
  })
});
