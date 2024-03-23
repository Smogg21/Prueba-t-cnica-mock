import { useState, useEffect } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
        const fourFirstWords = fact.split(' ', 4).join(' ')
        setImageUrl(`https://cataas.com/cat/says/${fourFirstWords}?size=50&fontColor=red`)
      })
  }, [])

  return (
    <main>
      <h1>Random Facts de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word of ${fact}`} />}
    </main>
  )
}
