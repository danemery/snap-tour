import React, { Component } from 'react';

export default class TourDate extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <li className="tour-date">
                <div>
                    {this.props.tourDate.datetime}
                </div>
                <div>
                    {this.props.tourDate.venue.name}
                </div>
                <div>
                    {this.props.tourDate.venue.city}, {this.props.tourDate.venue.region}
                </div>
            </li>
        )
    }
}