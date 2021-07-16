import React from 'react'
import './LinkContainer.scss'

import Button from '../button/Button'
import { buttonData } from '../data/Data'

function LinkContainer() {
 return (
  <div className='linkContainer'>
   {/* 
    This will be the place where we import button component and .map() through the data.js to dynamically change its icon and content using props.

    You can find this container's visual representation in Figma named absolutely same as the className above.
   */}
   {buttonData.map((button, index) => (
      <Button
        key={index}
        Icon={button.icon}
        Type={button.type}
        Title={button.title}
        Link={button.link}
      />
   ))}
  </div>
 )
}

export default LinkContainer
