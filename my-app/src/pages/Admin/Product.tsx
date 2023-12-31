import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { IProduct } from '../../types/product';

// cái này định nghĩa nốt nhé

interface IProps{
    products: IProduct[],
    removeProduct: (id: number) => void
}

const ProductPage = ({ products, removeProduct }:IProps) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(products)
    },[products])
    // cứ khi nào products có sự thay đổi về dữ liệu thì gọi lại useEffect chạy

    const onHandleRemove = (id:number) => {
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
                    {data.map((item: IProduct, index) => {
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