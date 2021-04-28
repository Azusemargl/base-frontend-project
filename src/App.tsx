import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

export const Wrapper: React.FC<AppProps> = () => {
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </BrowserRouter>
  )
}

// Types
type AppProps = {

}
