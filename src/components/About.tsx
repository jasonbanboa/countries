import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ThemeContext } from '../context/Theme'
import fetchCountries, { Country } from '../countriesService'
import Header from './Header'

const About: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country>();
  const { darkTheme } = useContext(ThemeContext); 
  const params = useParams();

  useEffect(() => {
    fetchCountries().then(DATA => {
      setCountries(DATA);
      const foundedCountry = DATA.find(({ name }) => name === params.countryName);
      setCountry(foundedCountry);
    });
  }, [params]);

  const countryCurrency = country?.currencies && country?.currencies.reduce((acc: string[], { name }) => [...acc, name], [] ).join(', ');
  const countryLanguages = country?.languages && country?.languages.reduce( (acc: string[], { name }) => [...acc, name], [] ).join(', ');
  const countryBordersArr = country?.borders ? country?.borders.map(countryName => countries?.find(({ alpha3Code }) => countryName === alpha3Code )) as Country[]: false

  return (
    <div id="app" className={darkTheme ? "dark-theme" : "light-theme"}>
      <Header />
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
        <article className="flex about-main">

          <div className="img-container flex-1">
            <img src={country?.flag} alt="" />
          </div>

          <div className="flex-1 text-section flex">
            <h3 className="country-name-h3">{country?.name}</h3>
            
            <div className="wrapper country-data flex">

              <div className="inner-wrapper flex-1">
                <div className="f-800">Native Name: <span className="f-300">{country?.nativeName}</span></div>
                <div className="f-800">Population: <span className="f-300">{country?.population}</span></div>
                <div className="f-800">Region: <span className="f-300">{country?.region}</span></div>
                <div className="f-800">Sub Region: <span className="f-300">{country?.subregion}</span></div>
                <div className="f-800">Capital: <span className="f-300">{country?.capital || 'No Capital'}</span></div>
              </div>  
                
              <div className="inner-wrapper flex-1">
                <div className="f-800">Top Level Domain: <span className="f-300">{country?.topLevelDomain || 'No top level Doamin'}</span></div>
                <div className="f-800">Currencies: <span className="f-300">{countryCurrency || 'No Currency'}</span></div>
                <div className="f-800">Languages: <span className="f-300">{countryLanguages || 'No Languages'}</span></div>
              </div>

            </div>

            <div className="f-800 border-countries">Border Countries: 
              <span className="f-300 flex gap-1 flex-wrap" style={{paddingTop: '10px'}}>{countryBordersArr  
              ? countryBordersArr.map(({ name }) => {
                return <span className="bordering-country-link"><Link to={`/about/${name}`}>{name}</Link></span>;
              }) :'No Bordering Countries'}
              </span>
            </div>

          </div>
        </article>
      </section>
    </div>
  );
} 


export default About;