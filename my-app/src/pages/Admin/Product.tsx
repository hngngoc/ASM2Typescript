import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

const ProductPage = ({ products, removeProduct }) => {

    const onHandleRemove = (id) => {
        console.log("Product: ", id);
        removeProduct(id)
    }

    return (
        
        <div>
            <Link to={`/admin/product/add`}><Button type="primary">Thêm sản phẩm</Button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} alt="" /></td>
                                <td>
                                    <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage