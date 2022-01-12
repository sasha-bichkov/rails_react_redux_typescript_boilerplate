import React from 'react'
import { render } from 'react-dom'

import App from '@Root/App'
import reportWebVitals from '@Root/reportWebVitals'

const rootElement = document.getElementById('main') as HTMLElement

render(
  <App />,
  rootElement
)

reportWebVitals(console.log)
