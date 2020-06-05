import React from 'react';

const SearchBar = (props) => {
  
  const handleChange = (e) => {
    // console.log(e.target.value, props)
    const sortType = e.target.value
    props.sortStocks(sortType)
  };
  
  const handleFilter = (e) => {
    const filterType = e.target.value
    props.filterStocks(filterType)
  };

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="name" checked={null} onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="price" checked={null} onChange={handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
