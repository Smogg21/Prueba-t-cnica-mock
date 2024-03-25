import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const fourFirstWords = fact.split(' ', 4).join(' ')
    const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${fourFirstWords}?size=50&fontColor=red`
    setImageUrl(CAT_ENDPOINT_IMAGE)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
