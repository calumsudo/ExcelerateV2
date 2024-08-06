import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  return (
    <NextUIProvider>
      <Dashboard />
    </NextUIProvider>
  )
}
