import React from 'react'


function Images() {
  return (
    <div className='HeroMain' style={{display:"flex",justifyContent:"space-between"}} >
        <div className='HeroContent'>
            <h1>Elevate your Sport Performance</h1>
        </div>
        <div className='HeroImages'>
            <img style={{ height: "550px" ,width: "530px",}} src="..\Set1.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Images
