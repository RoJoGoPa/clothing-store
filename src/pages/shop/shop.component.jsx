import React, { useState } from 'react'
import SHOP_DATA from './shop.data'
import { ColletionPreview } from '../../components/colletionPreview/colletionPreview.component'

export const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <ColletionPreview key={id} {...collection}></ColletionPreview>
      ))}
    </div>
  )
}
