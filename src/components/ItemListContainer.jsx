import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    
    const data = [
        {
            id: 1,
            name: 'Polerón Orange-White',
            price: 20000,
            description: 'Polerón línea Fuk-Off',
            stock: 5,
            img: 'my-app/src/assetes/img/foto_1.jpg'
        },
        {
            id: 2,
            name: 'Polerón Yellow-Jungle',
            price: 22000,
            description: 'Polerón línea Woozy',
            stock: 10,
            img: 'my-app/src/assetes/img/foto_1.jpg'
        },
        {
            id: 3,
            name: 'Polerón Simple-Jungle',
            price: 20000,
            description: 'Polerón línea Fuk-Off',
            stock: 8,
            img: 'my-app/src/assetes/img/foto_1.jpg'
        },
        {
            id: 4,
            name: 'Polerón Freedom-Black',
            price: 15000,
            description: 'Polerón línea Urban-X',
            stock: 12,
            img: 'my-app/src/assetes/img/foto_1.jpg'
        },

    ]

    useEffect(() => {
        const bringData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    
        bringData.then((res) => {
            setProducts(res)
        })
        .then(() => console.log(products))
        .catch((err) => console.log(err))
    
      return () => {
        
      }
    }, [])

  return (
    <main className="container-fluid d-flex-column justify-content-evenly bg-light py-5">
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>{greeting}</h2>
        <div className="container-fluid d-flex justify-content-evenly">
            <ItemList productos={products} />
        </div>
    </main>
  )
}

export default ItemListContainer