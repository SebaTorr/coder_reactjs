import React from 'react'
import Card from './Card'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

  function onAdd(cant) {
      console.log(`Has agregado ${cant} productos al carrito`)
  }
    
  return (
    <main className="container-fluid d-flex-column justify-content-evenly bg-light py-5">
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>{greeting}</h2>
        <div className="container-fluid d-flex justify-content-evenly">
            <Card 
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
            <Card 
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
            <Card 
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
            <Card
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