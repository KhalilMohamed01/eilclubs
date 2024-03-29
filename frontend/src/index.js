import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DashboardContextProvider, EventsContextProvider } from './context/DashboardContext';
import { AuthContextProvider } from './context/AuthContext';
import { ClubContextProvider } from './context/ClubContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ClubContextProvider>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
      </ClubContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

