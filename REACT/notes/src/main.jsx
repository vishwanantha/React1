import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<Provider store={Store}>
    <App />
    <ToastContainer
			position='top-right'
			autoClose={2000}
			hideProgressBar
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
		/>
		</Provider>
  </React.StrictMode>,
)
