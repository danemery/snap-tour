import React, { Component } from 'react';
import Tour from './Tour.jsx';

export default class App extends Component {
    constructor(props) {
        super()
        
        this.state = {data: null};
        this.getTour = this.getTour.bind(this);
    }

    render() {
        let TourComponent;

        if (this.state.data) {
            TourComponent = <Tour tour={this.state.data} />
        }

        return (
            <div>
                <button onClick={this.getTour}>
                    Click for tour info
                </button>
                {TourComponent}
            </div>
        )
    }


    getTour() {
        fetch('/tour')
            .then(res => res.json())
            .then(res => {
                const tourData = res;

                this.setState({data: tourData});
            });
    }
}