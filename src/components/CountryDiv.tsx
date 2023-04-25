
import React from 'react'
import { Country } from '../countriesService'

interface CountryDivProps {
  country: Country;
}

const CountryDiv: React.FC<CountryDivProps> = ({ country: { name, population, flag, region, capital } }) => {
  
  return (
    <article className="indi-country">
      <div className="img-container">
        <img src={flag} alt={name} />
      </div>
      <div className="country-info" >
        <h3 className="f-800">{name}</h3>
        <p className="f-600">Population: <span className="f-300">{population.toLocaleString()}</span></p>
        <p className="f-600">Region: <span className="f-300">{region}</span></p>
        <p className="f-600">Capital: <span className="f-300">{capital}</span></p>
      </div>
    </article>
  );
}

export default CountryDiv;
