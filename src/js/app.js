// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Routers from './Routers.js'
import  '../styles/Normalize.less'
import  '../styles/base.less'
import '../styles/app.less'

ReactDOM.render(
    <div>
        <Routers/>
    </div>,
    document.getElementById('app')
)