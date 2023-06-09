import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FilterSearch: React.FC = () => {
  const navigate = useNavigate();
  const selectRegion = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleFilterClick = () => {
    setOpen(() => open ? false : true);
  }

  const search = () => {
    if (searchInput.current) {
      navigate(`/search/${searchInput.current.value}`);
      searchInput.current.blur();
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search();
  }

  return (
    <section id="filter-search" className="filter-search responsive">
      <form id="search-form" onSubmit={handleSubmit}>
        <input ref={searchInput} id="country-search" type="text" placeholder="Search for a country..." />
        <div onClick={search} role="button" className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
        </div>
      </form>
      <fieldset id="filter-by-region" onClick={handleFilterClick}>
        Filter  by Region
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
        <div role="button" className={`select-region ${open ? 'open-regions-select' : ''}`} ref={selectRegion}>
          <div className="wrapper">
            <Link to="/region/Africa"><div role="button">Africa</div></Link>
            <Link to="/region/Americas"><div role="button">Americas</div></Link>
            <Link to="/region/Asia"><div role="button">Asia</div></Link>
            <Link to="/region/Europe"><div role="button">Europe</div></Link>
            <Link to="/region/Oceania"><div role="button">Oceania</div></Link>
            <Link to="/"><div role="button">All</div></Link>
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default FilterSearch;
