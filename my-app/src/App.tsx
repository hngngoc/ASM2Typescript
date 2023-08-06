import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage, DetailPage, ProductPage, AddProduct, UpdateProductPage } from './pages'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import { IProduct } from './types/product'
import { useNavigate } from 'react-router-dom'
import Category from './pages/Admin/Category/Category'
import { ICategory } from './types/category'
import AddCategory from './pages/Admin/Category/AddCategory'
import UpdateCategory from './pages/Admin/Category/UpdateCategory'
import { IUser } from './types/user'
import User from './pages/Admin/User/User'
import AddUser from './pages/Admin/User/AddUser'
import UpdateUser from './pages/Admin/User/UpdateUser'

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])
  

  const removeProduct = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setProducts(products.filter((item:IProduct) => item.id != id)))
  }
  const addProduct = (product: IProduct) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(() => {
      fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        navigate("admin/product")
      })
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

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => setCategorys(data))
  }, [])
  

  const removeCategory = (id: number) => {
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE"
    }).then(() => setCategorys(categorys.filter((item:ICategory) => item.id != id)))
  }
  const addCategory = (category: ICategory) => {
    fetch(`http://localhost:3000/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    }).then(() => {
      fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategorys(data)
        navigate("admin/category")
      })
    })
  }
  const onUpdateCategory = (category: ICategory) => {
    fetch(`http://localhost:3000/categories/${category.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    }).then(() => {
      fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategorys(data)
        navigate("admin/category")
      })
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])
  

  const removeUser = (id: number) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    }).then(() => setUsers(users.filter((item:IUser) => item.id != id)))
  }
  const addUser = (user: IUser) => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(() => {
      fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        navigate("admin/user")
      })
    })
  }
  const onUpdateUser = (user: IUser) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(() => {
      fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        navigate("admin/user")
      })
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
          <Route path='product'>
            <Route index element={<ProductPage products={products} removeProduct={removeProduct} />} />
            <Route path='add' element={<AddProduct addProduct={addProduct} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
          </Route>
          <Route path='category'>
            <Route index element={<Category categorys={categorys}  removeCategory={removeCategory} />} />
            <Route path='add' element={<AddCategory addCategory={addCategory} />} />
            <Route path='update/:id' element={<UpdateCategory onUpdateCategory={onUpdateCategory} categorys={categorys} />} />
          </Route>
          <Route path='user'>
            <Route index element={<User users={users}  removeUser={removeUser} />} />
            <Route path='add' element={<AddUser addUser={addUser} />} />
            <Route path='update/:id' element={<UpdateUser onUpdateUser={onUpdateUser} users={users} />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App