
import { useEffect, useState } from "react"
import { Country } from "./countriesService"
import CountryDiv from './components/CountryDiv' 

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  
  const fetchCountries = async () => {
    const url = '/src/countries/data.json';
    const DATA = await fetch(url).then(res => res.json());
    setCountries(DATA);
  }
  
  useEffect( () => {
    fetchCountries();
  }, []);
  
  useEffect(() => {
    console.log(countries);
    
  }, [countries]);

  return (
    <div id="app" className="light-theme">
      <main>
        {countries.slice(0, 20).map((country, i) => {
          return <CountryDiv key={i} country={country} />
        })}
      </main>
    </div>
  )
}

export default App
