import { useEffect, useState } from "react"
import { getProducts } from "../api/apiFuntions"
import { Card, Dropdown, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/FutbolCatalog.css'
import Products from "../../futbolProducts"


const FutbolCatalog = () => {
  const [listProduct, setListProduct] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [category, setCategory] = useState([])
  const [images, setImages] = useState([])

  const [filters, setfilters] = useState({})

  const handleClick = e => setfilters(filters => ({ ...filters, [e.target.name]: e.target.value }))

  useEffect(() => {
    // getProducts().then(products => {
      setListProduct(Products)
      setProductosFiltrados(Products)
    // })
    Products.map(product => {
      setImages(images => [...images, product.images[0]])
    }
    )
  }, [])

  useEffect(() => {
    if (!listProduct.length) return;
    let newProductos = [...listProduct];

    if (filters.subcategory) {
      newProductos = newProductos.filter(product => product.subcategory === filters.subcategory);
    }

    if (filters.size) {
      newProductos = newProductos.filter(product => product.sizes.includes(filters.size));
    }

    setProductosFiltrados(newProductos);
  }, [filters])

return (
    <div className="catalog">
      <h2>Productos</h2>
      <div className="filter">
        <Dropdown >
          <Dropdown.Toggle  className="filters" variant="success" id="dropdown-basic">
            Filtros
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="hombre">Hombre</button>
            </Dropdown.Item>
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="mujer">Mujer</button>
            </Dropdown.Item >
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="niño">Niño</button>
            </Dropdown.Item>
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="">Reset</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <section>
          <div className="vertical-buttons">
            <Button onClick={handleClick} name="size" value="S">Short</Button>
            <Button onClick={handleClick} name="size" value="M">Medium</Button>
            <Button onClick={handleClick} name="size" value="L">Large</Button>
            <Button onClick={handleClick} name="size" value="">Reset</Button>
          </div>
        </section>
    </div>  
        <ul className="products">
        {productosFiltrados.map(productFutbol => (

          <div class="card" key={productFutbol.idProduct}>
          <img src={images[productFutbol.idProduct]} className="productImg" alt="Producto"/>
          <div class="container">
            <p className="gender">{productFutbol.SubCategory}</p>
            <b className="title">{productFutbol.Title}</b>
            <h5><span className="price">{productFutbol.Price}$</span></h5>
          </div>
          <button variant="primary" className="addcart">Agregar al carrito</button>
        </div>
        ))}
      </ul>
    </div>

);
}

export default FutbolCatalog;