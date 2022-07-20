import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Loader'

import { useQuery } from '@apollo/client'
import { GET_SINGLE_PHOTO } from '../../graphql/queries'

import PropTypes from 'prop-types'

export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1> Error </h1>
  }

  return (
    <PhotoCard key={data.photo.id} {...data.photo} />
  )
}

PhotoCardWithQuery.propTypes = {
  id: PropTypes.number.isRequired
}
