/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React, { Component } from 'react';
import DATATABLE from "../COMMON/DATATABLE";
import VIEWFILM from '../Containers/film_view.container';
import Helper from '../../hoc/helper';
import $ from 'jquery';

class FILMSUBMISSONS extends Component {
  state = {
    HEADERS: ["FIRST NAME", "FILM MAKER", "CATEGORY", "GENRE", "LENGTH", "TIME"],
    ROWS: [
      {
        id: 1,
        first_name: "The Countdown",
        film_maker: "MSN Karthik",
        category: "SHORT",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      },

      {
        id: 2,
        first_name: "The Countdown",
        film_maker: "MSN Karthik",
        category: "DOCU",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      },
      {
        id: 3,
        first_name: "The Countdown",
        film_maker: "MSN Karthik",
        category: "TRAVEL",
        genre: "SCI-FI",
        length: 9,
        time: "24 Jun, 23:12:00"
      }
    ],

    movieDetails: ''
  }
  viewPopup = (movieDetails) => {
    console.log(movieDetails)
    this.setState({ movieDetails: movieDetails });

  }
  componentDidMount() {
   
//     let element = document.getElementById("wrapper");
// if(element){
//   element.classList.remove("toggled");
// }
  }
  render() {
    const tableRows = this.state.ROWS.map((row, i) => (
      <tr key={i}>
        <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
        <td>
          <p className="td_1 pointer" data-toggle="modal" data-target="#exampleModal" onClick={() => this.viewPopup(row)} >
            {row.first_name}
          </p></td>
        <td className="td_row">{row.film_maker}</td>
        <td className="td_row"><span className="badge badge-purple bw">{row.category}</span></td>
        <td className="td_row"><span className="badge badge-yellow bw">{row.genre}</span></td>
        <td className="td_row">{row.length}</td>
        <td className="td_row">{row.time}</td>
      </tr>

    ))

    return (

      <Helper>
        <div className="container-fluid">
          <h5 className="mt-4">Film Submissions</h5>
          <div className="row">
            <div className="col-md-9">
              <div className="btn-group">
                <div className="dropdown">
                  <button className="btn btn-white btn-sm dropdown-toggle mr-2" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Last 30 Days
           </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                  </div>
                </div>
                <button type="button" className="btn btn-orange btn-sm">Modify Filters</button>

              </div>
            </div>
            <div className="col-md-3 d-none d-md-block">
              <div className="dropdown">
                <span>Sort By:</span> <button className="btn btn-white btn-sm dropdown-toggle pull-right" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Last 30 Days
           </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">Action</button>
                  <button className="dropdown-item" type="button">Another action</button>
                  <button className="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">

            <DATATABLE headers={this.state.HEADERS} tableRows={tableRows} />

            <VIEWFILM movieDetails={this.state.movieDetails} />
          </div>

        </div>

      </Helper>
    )
  }
}

export default FILMSUBMISSONS;
