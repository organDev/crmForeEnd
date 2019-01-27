import * as cardsService from '../service/ListService';
export default {
    namespace:'listModel',
    state:{
        cardsList:[],
    },
    reducers:{
        saveList(prevState,{payload:cardsList}){
            return{
                ...prevState, cardsList
            }
        }
    },
    effects:{
        /**
         * 查询列表
         * @param {*} _ 
         * @param {*} sagaEffects 
         */
        *queryList(_,sagaEffects){
            const {call, put} = sagaEffects;
            const res = yield call(cardsService.queryList);
            console.log(res);
            yield put({
                type:'saveList',
                payload:res.result
            });
        },
        /**
         * 新增一个数据
         * @param {*} param0 
         * @param {*} sagaEffects 
         */
        *addOne({payload}, sagaEffects){
            const {call, put} = sagaEffects;
            const res = yield call(cardsService.addOne,payload);
            yield put({
                type: 'queryList'
            });
            // return res;
        }
    }
}