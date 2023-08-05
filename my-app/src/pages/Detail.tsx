import React from 'react'
import { useParams } from 'react-router-dom'


const DetailPage = ({ products }) => {
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
    )
}

export default DetailPage