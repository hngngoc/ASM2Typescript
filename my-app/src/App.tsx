import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage, DetailPage, Dashboard, ProductPage, AddProduct, UpdateProductPage } from './pages'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import { IProduct } from './types/product'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setProducts(products.filter((item) => item.id != id)))
  }
  const addProduct = (product: IProduct) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }
  const onUpdate = (product: IProduct) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }
  return (
    <>

      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage products={products} />} />
          {/* path: /product */}
          <Route path='detail/:id' element={<DetailPage products={products} />} />
          {/* path: /product/detail/:id */}
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='product'>
            <Route index element={<ProductPage products={products} removeProduct={removeProduct} />} />
            <Route path='add' element={<AddProduct addProduct={addProduct} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App