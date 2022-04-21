import React from 'react'
import Card from './Card'

const ItemListContainer = ({greeting}) => {
  return (
    <main className="container-fluid d-flex-column justify-content-evenly bg-light py-5">
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>{greeting}</h2>
        <div className="container-fluid d-flex justify-content-evenly">
            <Card 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
            />
            <Card 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
            />
            <Card 
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
            />
            <Card
                titulo = {'Polerón Orange-White'}
                precio = {20000}
                btnStyle = {'btn btn-dark'}
                btnText = {'Añadir al carrito'}
            />
        </div>
    </main>
  )
}

export default ItemListContainer