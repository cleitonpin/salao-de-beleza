import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Edit from './components/Edit'
import Funcionarios from './pages/Funcionarios'
import Main from './pages/Main'
import Register from './pages/Register'
import Servico from './pages/Servicoes'
import System from './pages/System'

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/registrar" component={Register}/>
                <Route exact path="/admin/private" component={System}/>
                <Route exact path="/admin/servicos" component={Servico}/>
                <Route exact path="/admin/funcionarios" component={Funcionarios}/>
                <Route exact path="/admin/edit" component={Edit}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;