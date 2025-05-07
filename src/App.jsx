import { useState } from "react"
import './app.css'

import animalshow from './animalshow'

function getRandomAnimal(){
  const animals = ['cat', 'bird', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random()* animals.length)]
}

function App() {

  const [animals, setAnimals] = useState([])
  
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <animalshow type={animal} key={index}/>
  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div  className="animal-list">
        {renderedAnimals}
      </div> 
    </div>
  )
}

export default App
