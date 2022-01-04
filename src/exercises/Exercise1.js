import React , {useState} from 'react'

export default function Exercise1() {
  // your code here
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleNameChange = e => setName(e.target.value)
  const handleCityChange = e => setCity(e.target.value)
  const handleCountryChange = e => setCountry(e.target.value)



  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
      <input onChange={handleNameChange} value={name} placeholder='name...' />
      <input onChange={handleCityChange} value={city} placeholder='city...' />
      <select value={country} name="countries" id="country-drop-down" onChange={handleCountryChange}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      </div>
    </div>
  )
}