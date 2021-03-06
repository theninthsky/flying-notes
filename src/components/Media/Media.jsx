import { useState, useEffect } from 'react'
import { string, element, arrayOf, oneOfType } from 'prop-types'

const Media = ({ query, children: component }) => {
  const [matches, setMatches] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (Array.isArray(query)) return setMatches(query.some(q => window.matchMedia(q).matches))

      setMatches(window.matchMedia(query).matches)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [query])

  return component && matches ? component : null
}

Media.propTypes = {
  query: oneOfType([string, arrayOf(string)]).isRequired,
  children: element.isRequired
}

export default Media
