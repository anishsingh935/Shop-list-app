import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditShop = () => {
  let history = useHistory();
  const { id } = useParams();
  const [shop, setShop] = useState({
    name: "",
    category: "",
    address: ""
  });

  const { name, category,address } = shop;
  const onInputChange = e => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadShop();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/shops/${id}`, shop);
    history.push("/");
  };

  const loadShop = async () => {
    const result = await axios.get(`http://localhost:3003/shops/${id}`);
    setShop(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Shop</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Shop Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your shop category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your shop Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Shop</button>
        </form>
      </div>
    </div>
  );
};

export default EditShop;
