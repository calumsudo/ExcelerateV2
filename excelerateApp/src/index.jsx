import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './auth-config.js';
import { m } from 'framer-motion';

const msalInstance = new PublicClientApplication(msalConfig);

if(!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
    if(event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
    }
});

const root = createRoot(document.body);
root.render(<App instance={msalInstance}/>);