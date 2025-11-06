"use client";
import { useEffect, useState } from "react";

const MyPosts = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("Run use effect");
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  return (
    <>
      <h2>CSR</h2>
      <div>my posts</div>
      {new Date().getSeconds()}
      <div>
        <ul>
          {list.map((product: any) => {
            return (
              <li key={product?.id} className="text-amber-500">
                {product?.name} = {product?.data?.capacity || "Empty"}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MyPosts;
