import React from 'react'
import { useSelector } from 'react-redux'

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  )
}

export default CakeView

//Notes: To access the states present in the store -> state.cake.numOfCakes because in the store we have const store = configureStore({
    // reducer : {
    //     cake: cakeReducer,
    //     icecream: iceCreamReducer,
    //     user: userReducer
    // },
