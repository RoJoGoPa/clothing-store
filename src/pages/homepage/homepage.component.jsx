import './homepage.styles.scss'
import React from 'react'
import { Directory } from '../../components/directory/directory.component'

export const HomePage = () => {
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  )
}
