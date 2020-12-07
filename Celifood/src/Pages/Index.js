import React from 'react';

import Banner from '../Components/Banner';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import Carousel from '../Components/Carousel';

import '../css/styles.css'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'

export default class Index extends React.Component {
    render(){
        return(
            <div>
                <Banner />
                <Header />
                <Heading />
                <Carousel />

            </div>
        );
    }
}