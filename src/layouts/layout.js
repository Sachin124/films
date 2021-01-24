/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */

 import React from 'react';
 import SIDEBAR from '../sidebar/sidebar.container';
 import NAVBAR from '../shared/navbar/navbar.container';
 import MODULEROUTER from '../Modules/modules.router';
 import { useLocation } from 'react-router-dom'


 const LAYOUT = ()=>{
//  The final layout file which loads the componets and containers dynamically
  const location = useLocation();
  let canShow = false;
  if(location.pathname === "/view-movie"){
    canShow = true;
  }
    return(
        <div className="d-flex" id="wrapper">
        <SIDEBAR />
        <div id="page-content-wrapper">
          <NAVBAR canShow={canShow}/>
        
              <MODULEROUTER />
        </div>
      </div>
    )
 };


export default LAYOUT;