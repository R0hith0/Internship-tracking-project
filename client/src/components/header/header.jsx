import TopBar from "../TopBar/TopBar";
import SearchBar from "../SearchBar/SearchBar";

import "./header.css";


function Header({ search, setSearch, sort, setSort }) {

  return (

    <div className="header">


      <TopBar />


      <SearchBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />


    </div>

  );

}


export default Header;