import React from 'react'
import { useState} from 'react';
import { IUser } from '../../../types/user'; 
import { Button, Checkbox, Form, Input } from 'antd';

interface IProps{
  addUser: (user:IUser) => void
}

const AddUser = ({addUser}: IProps) => {

  const onFinish = (values: any) => {
    addUser(values)
  };
    
  const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
  };
  return (
    <div>
            
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 500}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="User Name"
                name="name"
                rules={[{ required: true, message: 'Please input your UserName!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="PassWord"
                name="password"
                rules={[{ required: true, message: 'Please input your ProductPrice!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Role ID"
                name="roleId"
                rules={[{ required: true, message: 'Please input your RoleID!!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add User
                </Button>
                </Form.Item>
            </Form>   
        </div>
  )
}

export default AddUser