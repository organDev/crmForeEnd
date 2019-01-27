import React from 'react';

import myStyle from '../css/styles.css';
/**
 * 自定义样式demo
 */
class MyStyle extends React.Component{
    render(){
        return(
            <div className={myStyle.hello}>Hello World!</div>
        );
    }
}

export default MyStyle;