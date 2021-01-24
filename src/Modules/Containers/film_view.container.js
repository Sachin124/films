/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const VIEWFILM = (props) => {

  let closeModel = () => {
    $('#exampleModal').modal('hide');
    // $("#wrapper").toggleClass("toggled");

  }

  let closeModels = () => {
    $('#exampleModal').modal('hide');

  }
  const movieDetails = props.movieDetails;
  return (

    <div className="modal fade modal-mini" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-small" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <p className="text-center tc2"><strong>Good choice :)</strong></p>
            <div class="card">
              <img class="card-img-top" src="https://img.youtube.com/vi/0yGThj4HskA/0.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{movieDetails.first_name}</h5>
                <p class="card-text ">Have you ever heard of a Sci-fi film made in under $75 or Rs.5500? Presenting to you - "The Countdown". </p>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <Link to="/view-movie" onClick={() => { closeModels(); closeModel() }}  >  <p className="text-danger" data-dismiss="modal">later</p></Link>
            <Link to="/view-movie" onClick={closeModel}> <p className="text-success">Play
      </p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default VIEWFILM;