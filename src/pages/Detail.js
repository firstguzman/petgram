import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const params = useParams()

  return (
    <Layout title={`Fotografía ${params.detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  )
}
