import "../styles/PackageCard.css"
import React from 'react'

function PackageCard({tourCard}) {
  return (
    <div className="packageOuter">
        <div className="packageInner">
            <img src={tourCard?.src} alt="" />
        </div>
        <h3>{tourCard?.heading}</h3>
        <p>{tourCard?.subHeading}</p>
        <button>Read More</button>
    </div>
  )
}

export default PackageCard