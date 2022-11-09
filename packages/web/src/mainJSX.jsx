import './init';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {TamaguiProvider} from 'tamagui'
import './index.css'
import config from 'core/config/tamagui.config'
import AppJSX from "./AppJSX";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <AppJSX/>
    </TamaguiProvider>
  </React.StrictMode>
)
