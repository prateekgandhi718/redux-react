import React from 'react'
import { useSelector } from 'react-redux'

const IceCreamView = () => {
    const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
  return (
    <div>
      <h2>Number of icecreams - {numOfIceCream}</h2>
      <button>Order icecream</button>
      <button>Restock icecreams</button>
    </div>
  )
}

export default IceCreamView
