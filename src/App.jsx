import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])
  return { fact, refreshRandomFact }
}

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Random Facts de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word of ${fact}`} />}
    </main>
  )
}
