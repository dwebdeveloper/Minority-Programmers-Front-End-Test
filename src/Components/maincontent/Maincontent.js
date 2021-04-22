import React, { Component } from 'react';
import Incubator from '../../Pages/incubator/Incubator';
import '../maincontent/Maincontent.css';
//MainContent is a building block that will help me consolidate the pages. Still in progress:(
//rendering some pages to see if works and revise and edit


class Maincontent extends Component {
    render() {
        return (
            <div className='MainContent'>

                <Incubator />

            </div>
        )
    }
}

export default Maincontent;