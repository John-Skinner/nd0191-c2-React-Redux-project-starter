import { render, screen } from '@testing-library/react';
import App from './App';
import middleware from "../middleware";
import reducer from '../reducers';
import {Provider} from "react-redux";
import {createStore} from "redux";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('user initial',()=>{
const store = createStore(reducer,middleware);
  render(
      <Provider store={store}>
        <App/>
      </Provider>
      ,document.getElementById('root')
  );
})
