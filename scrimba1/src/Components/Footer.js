import React from 'react'
import logo2 from './fb.png'
import logo3 from './inst.png'
import logo4 from './phone.png'
import logo5 from './twitter.png'

function Footer() {
  return (
    <div id="foot">
        <img src={logo4} alt='1' width="40px" height="40px"/>
        <img src={logo2}  alt='2' width="40px" height="40px"/>
        <img src={logo3}  alt='2' width="40px" height="40px"/>
        <img src={logo5}  alt='2' width="40px" height="40px"/>
    </div>
  )
}

export default Footer