import React, { useId } from "react";

function ShoppingList({ items }) {
  const id = useId();
  console.log(id);
  return (
    <>
      <h1>Alışveriş Listesi</h1>
      <ul>
        {items.map((item, index) => {
          // NOT: Key olarak “index” kullanmamalıyız!
          // Bu konuya daha sonra bu değineceğiz
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
