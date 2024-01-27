import React from 'react'

function Comp1(prop1) {
    console.log("component 1 peda huwa")
    
  return (
    <>
    <h1>
      Mera Counter
    </h1>
    <button>Click to add</button>
    <h1>
      Mera Name {prop1} hai
    </h1>
    </>
  )
}

export default Comp1