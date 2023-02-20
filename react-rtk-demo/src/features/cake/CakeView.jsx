import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => {dispatch(ordered())}}>Order cake</button>
      <button onClick={() => {dispatch(restocked(5))}}>Restock cakes</button>
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
