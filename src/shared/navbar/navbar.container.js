/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import Helper from '../../hoc/helper';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import ARROW from '../../assets/left_arrow.svg'
import SEARCH from '../../assets/search.svg'
import USER from '../../assets/user_photo.png'
import BELL from '../../assets/bell_icon.svg'



const NAVBAR = (props) => {

  let handleClick = () => {
    $("#wrapper").toggleClass("toggled");
  }


  return (
    <Helper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

        <div id="buttons">
        <button className="n_toggle" type="button" onClick={handleClick}>
              <span className="navbar-toggler-icon"></span>
            </button>
          {props.canShow === true ? <Link to="/"> <button className="btn btn-orange" id="backbutton" type="button">
            <img alt="arrow" className="mb1" src={ARROW} /> Back
        </button> </Link> : null}

        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="mr-2">
              <div class="input-group">
                <span class="input-group-addon">
                  <img className="search_img pointer" alt="Search" src={SEARCH} />
                </span>
                <input type="text" class="form-control no-border" placeholder="Search Films and Filmmakers" />

              </div>
            </li>
            <li class="mr-2">
              <img className="pointer" alt="Search" src={BELL} />
              <span class="notification">5</span>
            </li>
            <li class="mr-2">
              <img className="user_photo pointer" alt="Search" src={USER} />

            </li>


          </ul>
        </div>
      </nav>
    </Helper>
  )
}


export default NAVBAR;