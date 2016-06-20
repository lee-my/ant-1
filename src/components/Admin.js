import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
// import Wilddog from 'wilddog'

// 获取wilddog数据
// var eolgalleryData = new Wilddog('https://eolgallery.wilddogio.com/');


const FormItem = Form.Item;

class Admin extends React.Component {

	// 初始化状态
    constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
	    e.preventDefault();
	    var loginEnter = this.props.form.getFieldsValue();
	 //    eolgalleryData.on('value', function(snapshot) {

		//     var eolgalleryData = snapshot.val();
		//     var eolgalleryData = Object.keys(eolgalleryData).map(function(k){return eolgalleryData[k]}); //json数据转换为数组
		//                                                                                                  //
		//     for(var i = 0, j = eolgalleryData.length; i < j; i++){
		//     	if(eolgalleryData[i].title == loginEnter.userName){
		//     		alert('登录成功！')
		//     	}
		//     }
		    
		// });
	    
	}

	render() {
		const { getFieldProps } = this.props.form;
		return (
			<div className="login-main">
				<div className="center">
					<Form horizontal onSubmit={this.handleSubmit}>
				        <FormItem
				          label="账户：">
				          <Input placeholder="请输入账户名"
				            {...getFieldProps('userName')} />
				        </FormItem>
				        <FormItem
				          label="密码：">
				          <Input type="password" placeholder="请输入密码"
				            {...getFieldProps('password')} />
				        </FormItem>
				        <FormItem>
				          <Checkbox {...getFieldProps('agreement')}>没有密码点击此处</Checkbox>
				        </FormItem>
				        <Button type="primary" htmlType="submit">登录</Button>
				    </Form>
				</div>
			</div>
		);
	}
}

Admin = Form.create()(Admin);

export default Admin;