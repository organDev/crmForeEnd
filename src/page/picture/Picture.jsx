import React from 'react';
/**
 * 图片组件
 */
class Picture extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src}/>
                {this.props.children}
            </div>
        )
    }
}
export default Picture;