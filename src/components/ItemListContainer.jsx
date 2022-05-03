import React, { useEffect, useState } from 'react'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    
    const [product, setProduct] = useState([]);
    
    const productos = [
       {
        name: 'Polerón Orange-White',
        price: 20000
       },
       {
        name: 'Polerón Yellow-Jungle',
        price: 22000
       },
       {
        name: 'Polerón Simple-Black',
        price: 20000
       },
       {
        name: 'Polerón Freedom-Black',
        price: 15000
       },
   ] 

    useEffect(() => {
        const bringProduct = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        
        bringProduct
        .then(
            (res) => {
                setProduct(res);
            }
        )
        .then(() => console.log(product))
        .catch((err) => console.log(err))
        
        return () => {}
    }, [])
        

  function onAdd(cant) {
      console.log(`Has agregado ${cant} productos al carrito`)
  }
    
  return (
    <main className="container-fluid d-flex-column justify-content-evenly bg-light py-5">
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>{greeting}</h2>
        <div className="container-fluid d-flex justify-content-evenly">
            <Item 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
                countProduct = {<ItemCount 
                    stock = {5}
                    initial = {1}
                    onAdd = {onAdd}
                />}
            />
            <Item 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
                countProduct = {<ItemCount 
                    stock = {10}
                    initial = {1}
                    onAdd = {onAdd}
                />}
            />
            <Item 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
                countProduct = {<ItemCount 
                    stock = {8}
                    initial = {1}
                    onAdd = {onAdd}
                />}
            />
            <Item
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
                countProduct = {<ItemCount 
                    stock = {12}
                    initial = {1}
                    onAdd = {onAdd}
                />}
            />
        </div>
    </main>
  )
}

export default ItemListContainer