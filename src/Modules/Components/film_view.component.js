/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
// import $ from 'jquery';
import SimpleTabs from './tabs'
import USER1 from '../../assets/user1.png';
import USER2 from '../../assets/user2.png';

class FILMVIEW extends React.Component {

    state = {
        reviews: [
            {
                img: USER1,
                name: "Glen Ortega",
                comment: "This is an amazing film."
            },
            {
                img: USER2,
                name: "Martha Vasquez",
                comment: "The Great Waves is the essential resource each person needs to prepare themselves mentally, emotionally and practically for the great change that is coming. Wonderful effort overall. Liked a lot."
            }
        ]
    }
   
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 px-0">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="My Daily Marathon Tracker" id="video" className="embed-responsive-item" src="https://www.youtube.com/embed/0yGThj4HskA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-3 px-0">
                        <div className="card" >
                            <div className="card-body">
                                <p><span className="film_title">The Countdown</span> by M S N Karthik</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <SimpleTabs reviews={this.state.reviews} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};


export default FILMVIEW;