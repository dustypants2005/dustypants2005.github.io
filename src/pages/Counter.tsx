import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <h2>Counter</h2>
        <hr/>
        <div className='row'>
        Count: {count}
        </div>
        <div className='btn-group row'>
          <button type='button' className='btn btn-primary'
          onClick={() => setCount(count + 1)}
          >+</button>
          <button type='button' className='btn btn-primary'
          onClick={() => setCount(count - 1)}
          >-</button>
        </div>
      </div>
    )
}

export default Counter