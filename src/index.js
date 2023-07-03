/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
