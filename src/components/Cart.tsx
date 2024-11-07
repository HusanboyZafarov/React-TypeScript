import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems: items, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={onClear} className="btn btn-danger">
        Clear
      </button>
    </>
  );
};

export default Cart;
