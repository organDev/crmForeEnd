import React from 'react';
import {Table, Button, Modal, Form, Input} from 'antd';
import {connect} from 'dva';
/**
 * 表格demo
 */
const FormItem = Form.Item;

const namespace = 'listModel';
const mapStateToProps = (state)=> {
    return {
        cardsList: state[namespace].cardsList,
        cardsLoading: state.loading.effects[`${namespace}/queryList`],
      }; 
 }
 const mapDispatchToProps = (dispatch)=>{
     return{
         queryList:()=>{
             const action = {
                 type:`${namespace}/queryList`
             };
             dispatch(action);
         },
         addOne:(payload)=>{
             const action = {
                 type:`${namespace}/addOne`,
                 payload:payload
             }
             dispatch(action);
         }
     }
 }
 
 @connect(mapStateToProps, mapDispatchToProps)
class ListPage extends React.Component{
    columns = [
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '描述',
          dataIndex: 'desc',
        },
        {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value}>{value}</a>,
        },
      ];
    constructor(props){
        super(props);
        this.state = {
            visible:false,//初始化不显示Model状态
        }
    }
    componentDidMount(){
        this.props.queryList();
    }
    showModel = ()=>{
        this.setState({visible:true});
    }
    onCancel = ()=>{
        this.setState({visible:false});
    }
    onOk = ()=>{
        //validateFields校验表单
        const {form: { validateFields } } = this.props;
        validateFields((err, values) => {
            if (!err) {
              this.props.addOne(values);
              // 重置 `visible` 属性为 false 以关闭对话框
              this.setState({ visible: false });
            }
          });
    }
    render(){
        const {cardsList, cardsLoading} = this.props;
        const {form:{getFieldDecorator}} = this.props;
        const {visible} = this.state;
        return(
            <div>
              <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
              <Button onClick={this.showModel}>新建</Button>
              <Modal title="新建记录" visible={visible} onCancel={this.onCancel} onOk={this.onOk}>
                <Form>
                    <FormItem label="名称">
                        {
                            getFieldDecorator("name", { rules: [{required: true}]})
                            (<Input/>)
                        }
                    </FormItem>
                    <FormItem label="描述">
                        {
                            getFieldDecorator('desc')
                            (<Input />)
                        }
                    </FormItem>
                    <FormItem label="链接">
                        {
                            getFieldDecorator('url', {rules: [{ type: 'url' }]})
                            (<Input />)
                        }
                    </FormItem>
                </Form>
              </Modal>
            </div>
        )
    }
}
//为页面组件 List 提供表单所需要的内容(this.props.form)
export default (Form.create() (ListPage));