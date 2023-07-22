"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    console.log(products);
    setData(products);
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={fetchData}>press</button>
      {data.map((product, index) => (
        <div key={index}>
          <h1>{product.title}</h1>
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div>
      ))}
    </div>
  );
}
