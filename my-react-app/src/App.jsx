import { useState } from 'react'
import iShipLogo from './Imgs/Logo.png'
import michael from './Imgs/Michael.jpg'
import ale from './Imgs/ale.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const card = document.querySelector('.card');
  const card2 = document.querySelector('.card2');
  const matchup = document.querySelector('.matchup');

  const btn = document.querySelector('.logo');

  // href="https://www.instagram.com/_edgarthegreat/"
  
  console.log('clicked');

    btn.addEventListener('click', () => {
    if (card && card2 && matchup) {
    card.id = "one";
    card2.id= "two";

    card.style.backgroundColor = "#FF38D7";
    card2.style.backgroundColor = "#FF38D7";

    matchup.style.columnGap = '0';
  }
  })

  
  

  return (
    <>
      <div>
        <a  target="_blank">
          <img src={iShipLogo} className="logo" alt="iShip logo" />
        </a>
    
      </div>

      
      <div className='matchup'>

       <div className='card'>
        <h2>Michael 😤</h2>
        <img src={michael} alt="person" />
      </div>

      <div className='card card2'>
        <h2>Ale 😤</h2>
        <img src={ale} alt="person" className='ale'/>
      </div>

      </div>
     
      
     
    </>
  )
}

export default App
