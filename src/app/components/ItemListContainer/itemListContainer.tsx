// ItemListContainer.tsx
'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

interface ItemListContainerProps {
  greeting: string;
}

const ItemCount = dynamic(() => import('../ItemCount/itemcount'), { ssr: false });

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const handleAddToCart = (quantity: number) => {
    // Implemente a lógica para adicionar ao carrinho aqui
    console.log(`Adicionar ${quantity} itens ao carrinho`);
  };

  useEffect(() => {
    // Coloque aqui qualquer lógica que precise ser executada apenas no lado do cliente
  }, []);

  return (
    <>
      <div className="text-center">
        <h2>{greeting}</h2>
      </div>
      <div>
        <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
      </div>
    </>
  );
};

export { ItemListContainer };
