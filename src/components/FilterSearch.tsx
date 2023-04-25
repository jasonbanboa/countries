
import React from 'react'

const FilterSearch: React.FC = () => {
  return (
    <section id="filter-search">
      <form id="search-form">
        <input id="country-search" type="text" placeholder="Search for a country..." />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
      </form>
      <fieldset id="filter-by-region">
        Filter  by Region
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
        <div id="select-region">
          <div>Africa</div>
          <div>America</div>
          <div>Asia</div>
          <div>Europe</div>
          <div>Oceania</div>
        </div>
      </fieldset>
    </section>
  );
}

export default FilterSearch;
