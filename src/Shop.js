import React, { useSTate, useEffect } from "react";
import "./App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortniteapi.io/v1/items/list?lang=en");

    const items = await data.json();
    console.log(items);
  };
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
