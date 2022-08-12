import React, {useState, useEffect} from "react";
import "./Navbar.css";


const Navbar = (setData) => {

  const [search, setSearch] = useState("")

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <div className="Navbarmarvel">
      <div className="textnav"> Marvel´s character list</div>
      <div className="search-container">
        <input name="search" value={search} onChange={handleChange} className="buscar" type="text" placeholder="Buscar como.." />
        <button type="submit" className="submitmarvel">
          Buscar{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
