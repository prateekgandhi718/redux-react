import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
    const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
    const dispatch = useDispatch()
    const [num, setNum] = useState(1);
    
    const handleOrdering = () => {
        dispatch(ordered())
    }

    const handleRestocking = (num) => {
        dispatch(restocked(num))
    }

  return (
    <div>
      <h2>Number of icecreams - {numOfIceCream}</h2>
      <button onClick={() => handleOrdering()}>Order icecream</button>
      <input 
      type='number'
      value={num}
      onChange = {(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => handleRestocking(num)}>Restock icecreams</button>
    </div>
  )
}

export default IceCreamView
