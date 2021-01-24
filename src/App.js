/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
// import logo from './logo.svg';
import './App.css';
import LAYOUT from './layouts/layout';
import { BrowserRouter } from 'react-router-dom';

// imor
// import LAYOUT from './shared/navbar/navbar.container';
// import SIDEBAR from './sidebar/sidebar.container';
// import FILMSUBMISSONS from './Modules/Components/film_submission.component'
function App() {
  return (
    // <Helper>
    <BrowserRouter>

    <LAYOUT />
    </BrowserRouter>

  // </Helper>
  );
}

export default App;
