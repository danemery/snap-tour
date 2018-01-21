import React, { Component } from 'react';
import TourDate from './TourDate.jsx';

export default class Tour extends Component {
    constructor(props) {
        super()
        
        this.tour = null;
    }

    render() {
        return (
            <ul className="list-style-none">
                {this.props.tour.map((tourDate, i) => {
                    return <TourDate key={i} tourDate={tourDate} />
                })}
            </ul>
        )
    }
}