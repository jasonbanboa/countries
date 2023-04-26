import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import fetchCountries, { Country } from '../countriesService';
import Header from './Header';

const About: React.FC = () => {
  const [country, setCountry] = useState<Country>();
  const [darkTheme, setDarkTheme] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchCountries().then(DATA => {
      const foundedCountry = DATA.find(({ name }) => name === params.countryName);
      setCountry(foundedCountry);
    });
  }, [params]);

  return (
    <div id="app" className={darkTheme ? "dark-theme" : "light-theme"}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <section className="main about-main">
        <div className="wrapper flex mb-4">
          <Link to={'/'}>
            <button role="button" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              <span>Back</span>
            </button>
          </Link>
        </div>
        <article>
          <div className="img-container">
            <img src={country?.flag} alt="" />
          </div>
          <h3>{country?.name}</h3>
          <div className="f-800">Native Name: <span className="f-300">{country?.nativeName}</span></div>
          <div className="f-800">Population: <span className="f-300">{country?.population}</span></div>
          <div className="f-800">Region: <span className="f-300">{country?.region}</span></div>
          <div className="f-800">Sub Region: <span className="f-300">{country?.subregion}</span></div>
          <div className="f-800">Capital: <span className="f-300">{country?.capital}</span></div>
          <div className="f-800">Top Level Domain: <span className="f-300">{country?.topLevelDomain}</span></div>
          <div className="f-800">Currencies: <span className="f-300">{country?.currencies.reduce((acc: string[], { name }) => [...acc, name], []).join(', ')}</span></div>
          <div className="f-800">Languages: <span className="f-300">{country?.languages.reduce((acc: string[], { name }) => [...acc, name], []).join(', ')}</span></div>
          <div className="f-800">Border Countries: <span className="f-300"></span></div>
        </article>
      </section>
    </div>
  );
} 


export default About;