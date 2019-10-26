import React from 'react'

import './colletionPreview.styles.scss'
import { CollectionItem } from '../collectionItem/collectionItem.component'

export const ColletionPreview = props => {
  const { title, items } = props
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...item }) => (
            <CollectionItem key={id} {...item}></CollectionItem>
          ))}
      </div>
    </div>
  )
}
