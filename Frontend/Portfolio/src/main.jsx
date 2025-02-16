import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from './Context/LoginContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <LoginContextProvider>
    <App />
    </LoginContextProvider>
  
  </>,
)
