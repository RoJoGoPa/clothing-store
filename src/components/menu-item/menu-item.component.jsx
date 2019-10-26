import './menu-item.styles.scss'
import React from 'react'

export const MenuItem = props => {
  const { title, imageUrl, size } = props
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
