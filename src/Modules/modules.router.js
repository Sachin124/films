/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React, { Component } from 'react';
import Helper from '../hoc/helper';
import FILMSUBMISSONS from '../Modules/Components/film_submission.component';
import VIEWMOVIE from '../Modules/Components/film_view.component';

import { Route } from 'react-router-dom';

class MODULEROUTER extends Component {

    //  All the router path can include in Route
    render() {
        return (
            <Helper>
                <Route exact path="/" component={FILMSUBMISSONS} />
                <Route exact path="/view-movie" component={VIEWMOVIE} />
                
            </Helper>
        );
    }
}

export default MODULEROUTER;