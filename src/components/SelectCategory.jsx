import axios from "axios";
import React, { useEffect, useState } from "react";
import instance from "../api/api";

const SelectCategory = ({ onCategoryChange }) => {
  const [data, setData] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/categories",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData(response.data["Category Postingan"]);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);
  return(
    <div className="mt-10">
      <select className="border border-gray-300 p-2 rounded" onChange={handleCategoryChange}>
        {data.map((item) => (
          <option  key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
