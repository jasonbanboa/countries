
import React from 'react'
import { Country } from '../countriesService'

interface CountryDivProps {
  country: Country;
}

const CountryDiv: React.FC<CountryDivProps> = ({ country: { name, population, flag } }) => {
  return (
    <article className="indi-country">
      <img src={flag} alt={name} />
      {`${name}  ${population}`}
    </article>
  );
}

export default CountryDiv;
