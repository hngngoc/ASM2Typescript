import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product';
// đoạn này phải định nghĩa kiểu dữ liệu cho tham số truyền vào
interface Props{
    products: IProduct[]
}

const Homepage = ({ products }:Props) => {
    console.log("Homepage data: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3><Link to={`/detail/${item.id}`}>{item.name}</Link></h3>
                        <p>Price: {item.price}</p>
                        <img src={item.image} alt="" />
                        {/* đoạn này có image nhưng trong interface IProduct k có */}
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
