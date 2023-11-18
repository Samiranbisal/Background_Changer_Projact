import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("yellow")

  return (
    <>
      <h1 className='headtag'>Hello</h1>
        <div className='head1'style={{backgroundColor: color}} >
          Hi Samiran
          <div className='b1'>
            <div className='b2'>
              <button className='s1 s0' onClick={ () => setColor('red')}>Red</button>
              <button className='s1 s11' onClick={ () => setColor('white')}>White</button>
              <button className='s1 s2' onClick={ () => setColor('black')}>Black</button>
              <button className='s1 s3' onClick={ () => setColor('green')}>green</button>
              <button className='s1 s4' onClick={ () => setColor('blue')}>Blue</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
