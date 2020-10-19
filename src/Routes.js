import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Write from './pages/Write'

const Routes = () => {
    return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/write/:id' component={Write} />
            </Switch>
    )
}

export default Routes
