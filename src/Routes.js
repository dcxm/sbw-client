import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'

const Routes = () => {
    return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
            </Switch>
    )
}

export default Routes
