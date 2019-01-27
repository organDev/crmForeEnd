import require from '../utils/request';
/**
 * PuzzleCardPage的逻辑处理层
 */
export default{
    namespace: 'PuzzleCardModel',
    state: {
        data: [],
        counter: 0,
      },
      reducers:{//action -> dispath -> reducers ->state ->page
            addNewCard(state, {payload:newCard}){
                //添加新卡片
                const nextCounter = state.counter+1;
                const newCardWithId = {...newCard,id:nextCounter};
                const nextData = state.data.concat(newCardWithId);
                return {
                    data: nextData,
                    counter: nextCounter
                }
            }
      },
      effects:{//获取服务端数据
          *queryInitCards(_, sagaEffects){
            const {call, put} = sagaEffects;
            const endPointURI = '/random_joke';
            //请求服务端
            const puzzles = yield call(require, endPointURI);
            //触发dispatch
            yield put({type:'addNewCard',payload:puzzles});

          }
      }
}