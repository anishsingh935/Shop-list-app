import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    loadshops();
  }, []);

  const loadshops = async () => {
    const result = await axios.get("http://localhost:3003/shops");
    setShops(result.data.reverse());
  };

  const deleteShop = async id => {
    await axios.delete(`http://localhost:3003/shops/${id}`);
    loadshops();
  };
  const [filteredList, setFilteredList] = useState(false);

  const getFilteredList = () => {
    if (!filteredList) {
      setFilteredList(false);
      return shops;
    }
    setFilteredList(true);
    return shops.filter((index) => index.category === filteredList);
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={getFilteredList}
            >
              <option value="">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Bakers</option>
            </select>
          </div>
        </div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{shop.name}</td>
                <td>{shop.category}</td>
                <td>{shop.address}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/shops/${shop.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/shops/edit/${shop.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteShop(shop.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {shops.map((element, index) => (
        <index {...element} key={index} />
      ))}

    </div>
  );
};

export default Home;
