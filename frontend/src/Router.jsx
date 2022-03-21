import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './components/Common/Footer';
import Home from './containers/Home';
import Movies from './containers/Movies';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/movies'} component={Movies}/>
                <Route exact path={'/footer'} component={Footer}/>
            </Switch>
        </>
    );
};
export default Router;