import React from 'react'
import { gql, useQuery } from '@apollo/client'

const FILMS_QUERY = gql`
  query Root($filmId: ID) {
    film(id: $filmId) {
      title
      id
      director
    }
  }
`

export const Film = () => {
  const { data, error, loading } = useQuery(FILMS_QUERY, {
    variables: {
      filmId: 'ZmlsbXM6Mg==',
    },
  })

  console.log({ data, error, loading })

  return (
    <div>
      <h1>Films</h1>
      {loading && 'Loading...'}
      {error && `Error Occured! ${error.message}`}

      <p>Title: {data?.film?.title}</p>
      <p>Director: {data?.film?.director}</p>
    </div>
  )
}
