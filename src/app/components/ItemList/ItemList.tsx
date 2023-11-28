// ItemList.js
'use client'
// ItemList.tsx
// ItemList.tsx

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ItemList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Simulando uma chamada assíncrona a uma API
    const fetchData = async () => {
      try {
        // Aguarda 2 segundos antes de resolver a Promise
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simula dados recebidos da API
        const data: Product[] = [
          { id: 1, name: 'Product A', price: 20 },
          { id: 2, name: 'Product B', price: 30 },
          // Adicione mais produtos conforme necessário
        ];

        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <Item key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      <h3>Shopping Cart</h3>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
