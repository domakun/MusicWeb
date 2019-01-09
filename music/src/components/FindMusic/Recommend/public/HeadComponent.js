import React,{Component} from 'react'
import { Input, Icon } from 'antd'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

var head_component = {
    height:'35px' ,
    borderBottom: '2px solid rgb(194,12,12)',
}
var tit = {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '28px',
    color:'black',
    letterSpacing:'2px'
}

class HeadComponent extends Component{
    render (){
        return (
            <Router>
                <div style={head_component}>
                    <Link style={tit} to='/'> <Icon className='red' type="caret-down" /> {this.props.context.title}</Link>
                    {this.props.context.type.map((item) => {
                        return (
                                <Link className='recommend_link' to={'/'}>{item}</Link>
                        )
                    })
                    }
                    <div className='right' style={{marginTop:'10px'}}>
                        <Link className='recommend_link' to='/'>更多</Link> >>
                    </div>
                </div>
            </Router>
        )
    }
}

HeadComponent.defaultProps = {
    context: {
        title: '热门推荐',
        type: ['华语', '流行', '摇滚', '民谣', '电子']
    }
}
export default HeadComponent