import React from 'react';
import { Route, Switch } from 'react-router';
import Favourites from './containers/Favourites';
import Home from './containers/Home';
import Category from './containers/Category'
import Search from '../src/containers/Search'
// import Example from './components/Common/Example';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourites'} component={Favourites}/>
                <Route exact path={'/category'} component={Category}/>
                <Route exact path={'/search'} component={Search} />
                {/* <Route exact path={'/vipul'} component={Example} /> */}
            </Switch>
        </>
    );
};
export default Router;