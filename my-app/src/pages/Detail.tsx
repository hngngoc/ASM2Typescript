import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'
// đoạn này cũng cần định nghĩa cho tham số giống bên kia
interface Props{
    products: IProduct[]
}

const DetailPage = ({ products }:Props) => {
    const { id } = useParams()
    const currentProduct = products.find((item) => item.id === Number(id))
    console.log(currentProduct);
    return (
        <div>
            <h3>Name Product: {currentProduct?.name}</h3>
            <p>Price Product: {currentProduct?.price}</p>
            <p>Image Product: <img src={currentProduct?.image} alt="" /></p>
            <p>Category: { currentProduct?.categoryId}</p>
        </div>
        // đoạn này lại có categoryId nhưng k định nghĩa trong 
        // cái này thì call và tìm thông qua categoryId rồi hiển thị thôi mà
        // nó giống kiểu em lấy được id sản phẩm thì dựa vào đó để tìm ấy
        // mà ok hết rồi đấy
        //vang
    )
}

export default DetailPage