import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const [shop, setShop] = useState({
    name: "",
    category:"",
    address:""
  });

  const { id } = useParams();
  useEffect(() => {
    loadShop();
  }, []);
  const loadShop = async () => {
    const res = await axios.get(`http://localhost:3003/shops/${id}`);
    setShop(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">shop Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {shop.name}</li>
        <li className="list-group-item">shop category: {shop.category}</li>
        <li className="list-group-item">address: {shop.address}</li>
      </ul>
    </div>
  );
};

export default Shop;
