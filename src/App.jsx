import { useState, useEffect } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>Hola Causas</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
