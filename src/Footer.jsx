import React from 'react'
import FooterText from './FooterText'

const footer = () => {
  return (
      <div className="absolute bottom-20 w-full overflow-hidden bg-black py-2">
          <div className='h-full w-full inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none absolute z-20'>
      </div>
      <div className="animate-marquee whitespace-nowrap text-6xl z-10">
        <FooterText />
    </div>
    </div>
    )
}

export default footer