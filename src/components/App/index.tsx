import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from '../Header'
import { RandomPage } from '../RandomPage'
import { SearchPage } from '../SearchPage'
import { getRoute } from '../../utils'
import { reducer, initialState, Context } from '../../reducer'

import './App.css'

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="container">
      <Context.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route path={getRoute('search/')} component={SearchPage} />
            <Route path={getRoute()} component={RandomPage} />
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  )
}
