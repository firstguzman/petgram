import React, { useState, useEffect } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Category } from '../Category'
import { Loader } from '../Loader'

import { List, Item } from './styles'

const ListOfCategoriesComponent = () => {
  const [categories, loading] = useFetchData('https://petgram-server-firstguzman.vercel.app/categories')
  const [showFixed, setShowFixed] = useState(false)

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loader />
          : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
