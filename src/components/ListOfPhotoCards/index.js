import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Loader'

import { useQuery } from '@apollo/client'
import { GET_PHOTOS_BY_CATEGORY_ID } from '../../graphql/queries'
import PropTypes from 'prop-types'

const ListOfPhotoCardsComponent = ({ categoryId }) => {
  const { data, loading, error } = useQuery(GET_PHOTOS_BY_CATEGORY_ID, { variables: { categoryId } })

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1> Error </h1>
  }

  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = React.memo(ListOfPhotoCardsComponent, (prevProps, props) => {
  console.log(prevProps)
  console.log(props)
  return prevProps.categoryId === props.categoryId
})

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string
}
