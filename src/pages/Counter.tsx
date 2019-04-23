import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <h2><strong>Counter</strong></h2>
        <hr/>
        <div className='row'>
        Count: <h2 className='px-3'><strong>{ count }</strong></h2>
        </div>
        <div className='btn-group row'>
          <button type='button' className='btn btn-primary'
          onClick={() => setCount(count + 1)}
          ><i className='fas fa-plus fa-2x'/></button>
          <button type='button' className='btn btn-primary'
          onClick={() => setCount(count - 1)}
          ><i className='fas fa-minus fa-2x'/></button>
        </div>
      </div>
    )
}

export default Counter