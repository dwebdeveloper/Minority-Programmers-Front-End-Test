import React, { Component } from 'react';
import '../incubator/Incubator.css';

class Incubator extends Component {
    render() {
        return (
            <span className='IncubatorHeader'>
                <div className='WorldIcon'>World </div>
                <div className='LightBulbIcon'>World </div>
                <h1>Invest directly into minority innovations.</h1>
                <div className='PeopleIcon'>People</div>
            </span>


        )
    }
}

export default Incubator;