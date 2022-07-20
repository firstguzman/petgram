import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'

import { useMutation } from '@apollo/client'
import { LIKE_PHOTO } from '../../graphql/queries'

import { Link as LinkRouter } from 'react-router-dom'

import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [setLikedMutation] = useMutation(LIKE_PHOTO)

  const handleFavClick = () => {
    setLikedMutation({ variables: { input: { id } } })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <LinkRouter to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='null' />
            </ImgWrapper>
          </LinkRouter>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
