import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './assets/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/React_travel_planner">
        <App />
    </BrowserRouter>,
)
