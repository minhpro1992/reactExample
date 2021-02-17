import { render } from '@testing-library/react'
import React from 'react'
import {Provider} from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import configureStore from '../store/configureStore'

const testRender = (
    component: React.ReactNode,
    initialStore: any = undefined
) => {
    const store = configureStore(initialStore)
    return {
        ...render(
            <div className="App">
      <Provider store={store}>
          <Router>
        <Switch>
            <Route>{component}</Route>
        </Switch>
          </Router>
      </Provider>
    </div>
        )
    }
}

export default testRender