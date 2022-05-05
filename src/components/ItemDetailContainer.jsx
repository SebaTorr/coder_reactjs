import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const itemImages = require.context('../assets/img')


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const data = [
    {
        id: 1,
        name: 'Polerón Orange-White',
        price: 20000,
        description: 'Polerón línea Fuk-Off',
        stock: 5,
        img: itemImages('./foto_1.jpg')
    },
    {
        id: 2,
        name: 'Polerón Yellow-Jungle',
        price: 22000,
        description: 'Polerón línea Woozy',
        stock: 10,
        img: itemImages('./foto_2.jpg')
    },
    {
        id: 3,
        name: 'Polerón Simple-Jungle',
        price: 20000,
        description: 'Polerón línea Fuk-Off',
        stock: 8,
        img: itemImages('./foto_3.jpg')
    },
    {
        id: 4,
        name: 'Polerón Freedom-Black',
        price: 15000,
        description: 'Polerón línea Urban-X',
        stock: 12,
        img: itemImages('./foto_4.jpg')
    },
]

  useEffect(() => {
    const bringData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    bringData
      .then(res => 
        setProducts(res.find(item => item.id === parseInt(id)))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))

    return () => {};
  }, []);


  return (
    <>
      {
        loading ?
        <div className="d-flex justify-content-center" style={{marginTop: '5rem', marginBottom: '10rem'}}>
          <div className="spinner-grow justify-content-center" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
        :
        <ItemDetail 
          productos={products}
        />   
      }
    </>
  );
};

export default ItemDetailContainer;
