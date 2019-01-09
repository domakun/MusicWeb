//走马灯和旁边的组件
import React,{Component} from 'react'
import { Carousel } from 'antd';
import DownNow from './DownNow/DownNow'

var out_content_class = {
    width:"100%",
    backgroundColor:'#ddd',
    height:'336px'
}
class CarouselComponent extends Component {
    render(){
        return (
            <div style={out_content_class} >
                <div className='container_small'>
                    <Carousel
                        effect="fade"
                        autoplay>
                        <div><img src="http://p1.music.126.net/f_G5DiwLyNCA3S7_bzT1DQ==/109951163780361991.jpg" alt=""/></div>
                        <div><img src="http://p1.music.126.net/ZowSG8H1TuL7Yqy47CmMYA==/109951163781178285.jpg" alt=""/></div>
                        <div><img src="http://p1.music.126.net/EGyoKU7-C8GNYe--YADapA==/109951163776095083.jpg" alt=""/></div>
                    </Carousel>
                    <DownNow></DownNow>
                </div>
            </div>
        )
    }
}
export default CarouselComponent;