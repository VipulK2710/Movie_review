import React from 'react';
import { Route, Switch } from 'react-router';
import Favourites from './containers/Favourites';
import Home from './containers/Home';
import Category from './containers/Category';
import Cover from './components/Common/Cover';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourites'} component={Favourites}/>
                <Route exact path={'/category'} component={Category}/>
                <Route exact path={'/Cover'} component={Cover}/>
            </Switch>
        </>
    );
};
export default Router;