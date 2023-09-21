import { useState } from 'react'
import './app.css'

function App() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
  <div className ="wrapper">
     <button className="btn" onClick={toggleOpen}>
        {open ? 'Close Details' : 'Open Details'}
    </button>
    
    {open && (

    <div className="card">
    <div> Iphone 15 </div>
    <img className= "iphoneImage" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311 " alt="Iphone 15pro Max " />
    <>
      <div className="overlay">Overlay</div>
      <div className= "model">
      <div>This is the detail of iphone</div>
      <button onClick={toggleOpen}>Model</button>
            </div>

    </>
    </div>
    )}
  </div>
  )
}

export default App


