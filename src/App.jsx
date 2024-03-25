import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const fourFirstWords = fact.split(' ', 4).join(' ')
    const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${fourFirstWords}?size=50&fontColor=red`
    setImageUrl(CAT_ENDPOINT_IMAGE)
  }, [fact])

  const handleClick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
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
