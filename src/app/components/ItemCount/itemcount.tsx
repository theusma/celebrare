'use client'
// ItemCount.tsx
import React, { useState, useEffect } from 'react';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  useEffect(() => {
    // Coloque aqui qualquer lógica que precise ser executada apenas no lado do cliente
  }, []);

  return (
    <div>
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5C0 1.224 0.224 1 0.5 1h1.618l1.363 2.724-0.517 1.552h9.076L14 3H2.381L1.351 0.448a0.5 0.5 0.5 0 0 0-0.474-0.348L0.5 0H0V1.5zM14.439 4H2.681L1.258 7.552a0.5 0.5 0.5 0 0 0 0.474 0.348h11.664a0.5 0.5 0.5 0 0 0 0.474-0.348L14.439 4zM1 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
    </div>
  );
};

export default ItemCount;
