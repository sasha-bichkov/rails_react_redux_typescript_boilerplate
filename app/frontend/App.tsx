import React from 'react'
import { compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import store from '@Root/configureStore'
import reportWebVitals from '@Root/reportWebVitals'

import Suspense from '@Components/Suspense'
import ErrorFallback from '@Components/ErrorFallback'
import SideBar from '@Components/SideBar'
import { SideBarData } from '@Components/SideBar/SideBarData'

const Home = React.lazy(() => import('@Pages/Home'))
const NotFound = React.lazy(() => import('@Pages/NotFound'))
const Issues = React.lazy(() => import('@Pages/Issues'))
const Backlog = React.lazy(() => import('@Pages/Backlog'))

import '@Root/i18n'
import '@Scss/App.scss'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

class App extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Provider store={store}>
            <BrowserRouter>
              <div className="App">
                <SideBar SideBarData={SideBarData} />

                <React.Suspense fallback={<Suspense />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/issues" element={<Issues />} />
                    <Route path="/backlog" element={<Backlog />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </React.Suspense>
              </div>
            </BrowserRouter>
          </Provider>
        </ErrorBoundary>
      </React.StrictMode>
    )
  }
}

reportWebVitals(console.log)

export default App
