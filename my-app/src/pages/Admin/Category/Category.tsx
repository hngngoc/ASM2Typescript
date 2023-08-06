import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { ICategory } from '../../../types/category'; 

interface IProps{
    categorys: ICategory[],
    removeCategory: (id: number) => void
}

const Category = ({categorys, removeCategory}:IProps) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(categorys)
    },[categorys])
    // cứ khi nào products có sự thay đổi về dữ liệu thì gọi lại useEffect chạy

    const onHandleRemove = (id:number) => {
        console.log("Product: ", id);
        removeCategory(id)
    }
  return (
    <div>
            <Link to={`/admin/category/add`}><Button type="primary">Thêm danh muc</Button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: ICategory, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
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

export default Category