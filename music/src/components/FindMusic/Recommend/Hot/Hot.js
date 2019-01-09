import React, {Component} from 'react'
import HeadComponent from '../public/HeadComponent'
import SongSheetCover from '../public/SongSheetCover'


var content = {
    width:'100%',
    height:'523px',
}

class Hot extends Component {

    render (){
        return (
            <div>
                <HeadComponent></HeadComponent>
                <div className='flex' style={content}>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                    <SongSheetCover></SongSheetCover>
                </div>
            </div>
        )
    }
}
export default Hot