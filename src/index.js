import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import Testing from "./Testing"
import UserData from './contexts/userData';
import { Provider } from 'react-redux';
import { store } from "./containers/redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserData>
        <App />
      </UserData>
    </Provider>
  </React.StrictMode>
)