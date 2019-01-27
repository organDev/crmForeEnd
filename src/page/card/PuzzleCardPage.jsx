import React from 'react';
import {Card/*,Button*/} from 'antd';

import {connect} from 'dva';
/**
 * 使用model处理page逻辑
 */
//引用model
const namespace = "PuzzleCardModel";
/**
 * 把model中的state注入到组件
 * @param {*} state PuzzleCardModel中的state
 */
const mapStatetoProps = (state)=>{
        const cardList = state[namespace].data;
        return {
            cardList
        }
}
const mapDispatchToProps = (dispatch)=>{
        return{
            onDidMount:() =>{
              dispatch({type:`${namespace}/queryInitCards`});
            }
        }
}
@connect(mapStatetoProps, mapDispatchToProps)
class PuzzleCardPage extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.counter = 100;//添加次数上限
    //     this.state = {
    //         cardList:[
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a race?',
    //                 punchline: 'It ended in a tie',
    //               },
    //               {
    //                 id: 2,
    //                 setup: 'What happens to a frog\'s car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //               },
    //         ]
    //     }
    //     this.addNewCard = this.addNewCard.bind(this);
    // }
    // addNewCard(){
    //     //添加新卡片
    //     this.setState( prevState=>{
    //             const prevCardList = prevState.cardList;
    //             this.counter += 1;
    //             const card = {
    //                 id: this.counter,
    //                 setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    //                 punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //               };
    //             return {cardList: prevCardList.concat(card)}  
    //         }
    //     );
    // }
    componentDidMount(){
      this.props.onDidMount();
    }
    render() {
        return (
          <div>
            {
              this.props.cardList.map(card => {
                return (
                  <Card key={card.id}>
                    <div>Q: {card.setup}</div>
                    <div>
                      <strong>A: {card.punchline}</strong>
                    </div>
                  </Card>
                );
              })
            }
          </div>
        );
      }
}

export default PuzzleCardPage;