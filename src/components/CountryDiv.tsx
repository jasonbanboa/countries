
import React from 'react'
import { Country } from '../countriesService'

interface CountryDivProps {
  country: Country;
}

const CountryDiv: React.FC<CountryDivProps> = (props) => {
  return (
    <article className="indi-country">
      {JSON.stringify(props.country)}
    </article>
  );
}

export default CountryDiv;