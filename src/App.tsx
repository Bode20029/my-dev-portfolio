import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-md mx-auto grid">
        <div className="border border-red-500">column 1</div>
        <div className="border border-black">column 1</div> 
      </div>
    </>
  )
}

export default App
