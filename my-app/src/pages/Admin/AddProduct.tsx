import React from 'react'
import { useState} from 'react';
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input } from 'antd';

interface IProps{
    addProduct: (product:IProduct) => void
}

const AddProductPage = (props: IProps) => {

    const onFinish = (values: any) => {
        props.addProduct(values)
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
                label="Product Name"
                name="name"
                rules={[{ required: true, message: 'Please input your ProductName!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Product Price"
                name="price"
                rules={[{ required: true, message: 'Please input your ProductPrice!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add New Product
                </Button>
                </Form.Item>
            </Form>   
        </div>
    )
}

export default AddProductPage