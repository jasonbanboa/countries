import React, { useRef, MouseEvent } from 'react'

const FilterSearch: React.FC = () => {
  const selectRegion = useRef<HTMLDivElement>(null);

  const handleFilterClick = () => {
    selectRegion.current?.classList.toggle('open-regions-select');
  }

  const handleRegionSelect = (e: MouseEvent<HTMLDivElement>) => {
    const region = e.currentTarget.dataset.region;
    console.log(region);
  };

  return (
    <section id="filter-search">
      <form id="search-form">
        <input id="country-search" type="text" placeholder="Search for a country..." />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
      </form>
      <fieldset id="filter-by-region" onClick={handleFilterClick}>
        Filter  by Region
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
        <div role="button" className="select-region" ref={selectRegion}>
          <div className="wrapper">
            <div onClick={handleRegionSelect} data-region="Africa" role="button">Africa</div>
            <div onClick={handleRegionSelect} data-region="America" role="button">America</div>
            <div onClick={handleRegionSelect} data-region="Asia" role="button">Asia</div>
            <div onClick={handleRegionSelect} data-region="Europe" role="button">Europe</div>
            <div onClick={handleRegionSelect} data-region="Oceania" role="button">Oceania</div>
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default FilterSearch;
