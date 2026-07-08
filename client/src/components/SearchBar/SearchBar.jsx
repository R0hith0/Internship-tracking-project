import "./SearchBar.css";


function SearchBar({ search, setSearch, sort, setSort }) {


  return (

    <div className="search-container">


      <input
        className="search-input"
        type="text"
        placeholder="Search by role, company, or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />



      <div className="sort-container">


        <label>
          Sort by:
        </label>


        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="Latest">
            Latest
          </option>


          <option value="Oldest">
            Oldest
          </option>


        </select>


      </div>


    </div>

  );

}


export default SearchBar;