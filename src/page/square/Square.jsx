import React from 'react';
/**
 * 状态state 
 */
class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : null
        };
        //绑定事件行为
        this.onClick = this.onClick.bind(this);
    }
    render(){
        return(
            <button className="square" onClick={this.onClick}>
                {this.state.value}
            </button>
        )
    }
    onClick() {
       this.setState({value:'X'});
    }
}
export default Square;