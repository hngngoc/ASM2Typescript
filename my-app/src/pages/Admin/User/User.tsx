import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { IUser } from '../../../types/user'; 

interface IProps{
    users: IUser[],
    removeUser: (id: number) => void
}

const User = ({users, removeUser}: IProps) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(users)
    },[users])
    // cứ khi nào products có sự thay đổi về dữ liệu thì gọi lại useEffect chạy

    const onHandleRemove = (id:number) => {
        removeUser(id)
    }

  return (
    <div>
            <Link to={`/admin/user/add`}><Button type="primary">Thêm user</Button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>PassWord</th>
                        <th>Role </th> 
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: IUser, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                                <td>{item.roleId}</td>
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

export default User