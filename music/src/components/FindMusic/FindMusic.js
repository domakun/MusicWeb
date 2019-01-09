import React, { Component } from 'react'
import './FindMusic.css'
import CarouselComponent from './Carousel/Carousel'
import Recommend from './Recommend/Recommend'

class FindMusic extends Component {
    render() {

        return (
            <div className='FindMusic'>
                <CarouselComponent></CarouselComponent>
                <Recommend></Recommend>
            </div>
        );
    }
}


export default FindMusic;
