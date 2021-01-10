import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/Main'
import Register from './pages/Register'
import System from './pages/System'

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/registrar" component={Register}/>
                <Route exact path="/admin/private" component={System}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;