import React,{Component} from 'react'
import {Icon } from 'antd'

var SongSheetCover_class = {
    width:'140px',
    height:'204px',
}
var cover_class = {
    width:'140px',
    height:'140px',
    position:'relative'
}
var info_class = {
    width:'140px',
    height: '57px',
    margin:'2px 0px',
}
var listen_info = {
    width:'100%' ,
    height:'27px',
    backgroundColor:'rgba(0,0,0,.5)',
    bottom:'0px',
    position:'absolute',
    color:'white',
    padding:'5px 10px',
    boxSizing:'border-box',
}
class SongSheetCover extends Component{

    render(){
        return (
            <div style={SongSheetCover_class}>
                <div href="#"  style={cover_class}>
                    <img width='140' src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" alt=""/>
                    <a href="#" className='a_cover_class' ></a>
                    <div className='listen_info' style={listen_info}>
                            <span><Icon type="play-circle" />xx万</span>
                            <span className='right'><Icon type="play-circle" /></span>
                        </div>
                </div>
                <div className='ellipsis' style={info_class}>
                    电话卡刷道具卡就是打了卡家的就撒可见度卡了解得拉萨孔家店
                </div>
            </div>
        )
    }
}
export default SongSheetCover