// Item.tsx

import React from 'react';

interface ItemProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
}

const Item: React.FC<ItemProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Item;
