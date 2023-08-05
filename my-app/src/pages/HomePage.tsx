import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = ({ products }) => {
    console.log("Homepage data: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3><Link to={`/detail/${item.id}`}>{item.name}</Link></h3>
                        <p>Price: {item.price}</p>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
