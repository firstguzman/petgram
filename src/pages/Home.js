import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const Home = () => {
  const params = useParams()
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascotas | Petgram</title>
        <meta
          name='description'
          content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.categoryId} />
    </>
  )
}
