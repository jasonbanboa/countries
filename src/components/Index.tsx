import { useContext, useEffect, useState } from 'react'
import fetchCountries, { Country } from '../countriesService'
import { Link, useParams } from 'react-router-dom'
import CountryDiv from './CountryDiv' 
import FilterSearch from './FilterSearch'
import Header from './Header'
import { ThemeContext } from '../context/Theme' 

interface Params {
  region?: string;
  countryName?: string;
}

function Index() {
  const [countries, setCountries] = useState<Country[]>([]);
  const { darkTheme } = useContext(ThemeContext); 
  
  const params: Params = useParams();

  useEffect( () => {
    fetchCountries().then(DATA => {
      if (params.region) {
        const countriesFilteredByRegion = DATA.filter(({ region }) => region === params.region);
        setCountries(countriesFilteredByRegion);
      } else if (params.countryName) {
        console.log(DATA);
        const countriesFilteredByName = DATA.filter(({ name }) => name.toLowerCase().includes(params.countryName?.toLowerCase() ?? ''));
        setCountries(countriesFilteredByName);
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
      <Header />
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
