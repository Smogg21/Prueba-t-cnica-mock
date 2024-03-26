import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const fourFirstWords = fact.split(' ', 4).join(' ')
    const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${fourFirstWords}?size=50&fontColor=red`
    setImageUrl(CAT_ENDPOINT_IMAGE)
  }, [fact])

  return { imageUrl }
}
