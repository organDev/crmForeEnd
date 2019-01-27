import React from 'react';
/**
 * 定义一个ShoppingList组件
 * ShoppingList 展示购物列表
 */
class ShoppingList extends React.Component{
    render(){
        return (
            <div className='shopping-list'>
                <h1>ShoppingList for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}
export default ShoppingList;