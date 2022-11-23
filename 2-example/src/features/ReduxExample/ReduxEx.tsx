import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReduxUserForm from './components/ReduxUserForm'
import ReduxUserList from './components/ReduxUserList'
import store from './store'

function ReduxEx() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/listuser' element={<ReduxUserList/>} />
          <Route path='/formuser' element={<ReduxUserForm/>} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default ReduxEx