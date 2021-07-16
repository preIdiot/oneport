import React from 'react'
import './Button.scss'

import 'boxicons'


function Button({Icon, Type, Title, Link}) {

 return (
  <div className='button'>
   <a href={Link} rel="noopener noreferrer" target="_blank">
    <div className="buttonContainer">
     <box-icon type={Type} name={Icon}></box-icon>
     <div className='button-name'>
      <p>{Title}</p>
     </div>
    </div>
   </a>
  </div>
 )
}

export default Button
