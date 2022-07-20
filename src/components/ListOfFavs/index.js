import React from 'react'
import { Grid, Image, Link } from './styles'
import { useQuery } from '@apollo/client'
import { GET_FAVS } from '../../graphql/queries'
import { Loader } from '../Loader'

export const ListOfFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1> Error </h1>
  }

  const { favs } = data

  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}
