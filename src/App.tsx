
import { useEffect, useState } from "react"
import { Country } from "./countriesService"
import CountryDiv from './components/CountryDiv' 

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect( () => {
    const fetchCountries = async () => {
      const url = '/src/countries/data.json';
      const DATA = await fetch(url).then(res => res.json());
      setCountries(DATA);
    }
    fetchCountries();
  }, []);
  
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <>
      {countries.map((country, i) => {
        return <CountryDiv key={i} country={country} />
      })
      }
    </>
  )
}

export default App
