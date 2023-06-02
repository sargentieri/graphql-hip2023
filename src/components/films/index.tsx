import React from 'react'
import { gql, useQuery } from '@apollo/client'

const FILMS_QUERY = gql`
  query GET_FILMS_QUERY {
    film {
      films {
        id
        title
      }
    }
  }
`

export const Films = () => {
  const { data, error, loading } = useQuery(FILMS_QUERY)

  console.log({ data, error, loading })

  return (
    <div>
      <h1>Films</h1>
      {loading && 'Loading...'}
      {error && 'Error Occured!...'}

      {data?.allFilms?.films?.map((film: { id: string; title: string }) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </div>
  )
}
