import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import defaultComponent from '../components/defaultComponent/index';
// import orgLasCuevasMan from '../components/orgLasCuevasMan/index';
// import orgJibacoaMan from '../components/orgJibacoaMan/index';
// import orgLaHerraduraMan from '../components/orgLaHerraduraMan/index';
// import orgLosCanarreosMan from '../components/orgLosCanarreosMan/index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={defaultComponent} />
            <Route path="/Las Cuevas" component={orgLasCuevasMan} />
            <Route path="/Jibacoa" component={orgJibacoaMan} />
            <Route path="/La Herradura" component={orgLaHerraduraMan} />
            <Route path="/Los Canarreos" component={orgLosCanarreosMan} /> */}
            <Route path="/manicaragua/:municipio" component={defaultComponent} />
        </Switch>
    </BrowserRouter>
);

export default Router;
