import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCategory = ({ categorys, onUpdateCategory}) => {
    const { id } = useParams();
    const currentCategory = categorys.find((category) => category.id == id);
    const [inputValues, setInputValues] = useState()
    const onHandleChange = (event) => {
        const { name, value } = event.target; // lấy name và value của input
        const newData = { ...inputValues, [name]: value } // lấy tất cả các giá trị cũ và thêm giá trị mới
        setInputValues(newData); // cập nhật lại state
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const dataUpdate = { ...inputValues, "id": id } // lấy tất cả các giá trị của inputValues và thêm giá trị id
        onUpdateCategory(dataUpdate); // gọi hàm onUpdate được truyền từ component cha
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Category Name' defaultValue={currentCategory?.name} onChange={onHandleChange} name='name' />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateCategory