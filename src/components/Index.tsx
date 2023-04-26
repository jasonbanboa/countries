import { useEffect, useState } from 'react'
import fetchCountries, { Country } from '../countriesService'
import { Link, useParams } from 'react-router-dom'
import CountryDiv from './CountryDiv' 
import FilterSearch from './FilterSearch'
import Header from './Header'

function Index() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  
  const params = useParams();

  useEffect( () => {
    fetchCountries().then(DATA => {
      if (params.region) {
        const CountriesFilteredByRegion = DATA.filter(({ region }) => region === params.region);
        setCountries(CountriesFilteredByRegion);
      } else {
        setCountries(DATA); 
      }
    });
  }, [params]);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div id="app" className={darkTheme ? "dark-theme" : "light-theme"}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <FilterSearch />
      <main>
        {countries.map((country, i) => {
          return <Link to={`/about/${country.name}`}><CountryDiv key={i} country={country} /></Link>
        })}
      </main>
    </div>
  );
}

export default Index;
