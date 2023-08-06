import React from 'react'
import { useState} from 'react';
import { ICategory } from '../../../types/category';
import { Button, Checkbox, Form, Input } from 'antd';

interface IProps{
    addCategory: (category:ICategory) => void
}

const AddCategory = ({addCategory}: IProps) => {
    const onFinish = (values: any) => {
        addCategory(values)
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
                label="Category Name"
                name="name"
                rules={[{ required: true, message: 'Please input your CategoryName!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add New Category
                </Button>
                </Form.Item>
            </Form>   
        </div>
    )    
}

export default AddCategory