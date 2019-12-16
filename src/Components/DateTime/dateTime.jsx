import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';




export default class dateTime extends Component {
    
    render() {

          return (
            <Moment interval={30000}>
            1976-04-19T12:59-0500
            <p>ddfsfd</p>

             </Moment>
        );
    }
}
