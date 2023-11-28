// Carrinho.tsx

import React from 'react';

interface CarrinhoProps {
  produtosNoCarrinho: { name: string; price: number }[];
  onClose: () => void;
}

const Carrinho: React.FC<CarrinhoProps> = ({ produtosNoCarrinho, onClose }) => {
  return (
    <div className="carrinho-popup">
      <h2>Carrinho de Compras</h2>
      {produtosNoCarrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {produtosNoCarrinho.map((produto, index) => (
            <li key={index}>
              {produto.name} - ${produto.price}
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose}>Fechar Carrinho</button>
    </div>
  );
};

export default Carrinho;
