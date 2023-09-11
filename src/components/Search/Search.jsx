import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import data from "../../assets/data.json";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]); // Store filtered data in state

  const onChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Filter the data based on the new query
    const filteredProducts = data.filter((item) =>
      item.name.toLowerCase().includes(newQuery.toLowerCase())
    );

    setFilteredData(filteredProducts);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        {!filteredData.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {filteredData.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item.id);
                setSearchModal(false);
              }}
            >
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="prod-details">
                <span className="name">{item.name}</span>
                <span className="desc">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
