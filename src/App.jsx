import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Carousel from './components/Carousel'
import Modal from './components/Modal'

function App() {

  const [active, setActive] = useState("")

  return (
    <div className='containers'>
      <Modal></Modal>
      <Accordion title="Title 1" active={active} setActive={setActive} ></Accordion>
      <Accordion title="Title 2" active={active} setActive={setActive} ></Accordion>
      <Accordion title="Title 3" active={active} setActive={setActive} ></Accordion>
      <Accordion title="Title 4" active={active} setActive={setActive} ></Accordion>
      <Carousel></Carousel>
    </div>
  )
}

export default App
