
import React, { useEffect, useState } from 'react'
import './App.css'
import axios, { AxiosError } from 'axios'
import { Entry, Visibility, Weather } from './types'
import Entries from './components/Entries'

function App() {

  const DIARY_API = 'http://localhost:3000/api/diaries'

  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState<Visibility>('great')
  const [weather, setWeather] = useState<Weather>('sunny')
  const [com, setCom] = useState('')

  console.log(visibility)
  const [entries, setEntries] = useState<Entry[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    axios.get<Entry[]>(DIARY_API)
      .then(res => setEntries(res.data as Entry[]))
      .catch(err => {
        alert('err')
        console.error(err)
      })
  }, [])

  const sendForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post<Entry>(DIARY_API, {
        date: date,
        visibility: visibility,
        weather: weather,
        comment: com
      })
      
      setEntries(entries.concat(res.data))
    } catch (e) {
      const error = e as AxiosError
      if (axios.isAxiosError(e) && error.response?.data) {
        const info: string = error.response.data.toString()
        setError(info)
      } else {
        setError('Unknown error.')
      }
    }
  }
  
  return (
    <>
      <h2>
        Add new entry
      </h2>

      { error ? <p style={{ color: 'red' }}>{error}</p> : null }

      <form onSubmit={sendForm}>
        <label style={{ marginRight: 2 }}>date</label>
        <input type='date' name='date' placeholder='date' value={date} onChange={(e) => setDate(e.target.value)}  />
        <br />

        <label style={{ marginRight: 2 }}>visibility</label>
          <fieldset>
            <input onChange={() => setVisibility('great')} checked={visibility === 'great'} type='radio' id='great' value='great' name='great' />
              <label>great</label>
            <input onChange={() => setVisibility('good')} checked={visibility === 'good'} type='radio' id='great' value='good' name='good' />

              <label>good</label>
            <input onChange={() => setVisibility('ok')} checked={visibility === 'ok'} type='radio' id='ok' value='ok' name='ok' />
            <label>
              ok
            </label>
            <input onChange={() => setVisibility('poor')} checked={visibility === 'poor'} type='radio' id='poor' value='poor' name='poor' />
              <label>
                poor
              </label>
            
          </fieldset>
        <br />

        <label style={{ marginRight: 2 }}>weather</label>
          <fieldset>
            <input onChange={() => setWeather('sunny')} checked={weather === 'sunny'} type='radio' id='great' value='great' name='great' />
              <label>sunny</label>
            <input onChange={() => setWeather('rainy')} checked={weather === 'rainy'} type='radio' id='great' value='good' name='good' />

              <label>rainy</label>
            <input onChange={() => setWeather('cloudy')} checked={weather === 'cloudy'} type='radio' id='ok' value='ok' name='ok' />
            <label>
            cloudy
            </label>
            <input onChange={() => setWeather('stormy')} checked={weather === 'stormy'} type='radio' id='poor' value='poor' name='poor' />
              <label>
              stormy
              </label>

              <input onChange={() => setWeather('windy')} checked={weather === 'windy'} type='radio' id='poor' value='poor' name='poor' />
              <label>
              windy
              </label>
            
          </fieldset>
        <br />

        <label style={{ marginRight: 2, marginBottom: 2 }}>comment</label>
        <input name='date' placeholder='comment' value={com} onChange={(e) => setCom(e.target.value)}  />
        <br />

        <button type='submit'>add</button>

        <hr />

        { entries ? <Entries entries={entries} /> : null }

      </form>
    </>
  )
}

export default App
