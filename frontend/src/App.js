import { useState, useEffect } from 'react'
import WineList from './components/WineList'
import wineService from './services/wines'

const App = () => {

  const [wines, setWines] = useState([])

  useEffect(() => {

    wineService
      .getAllWines()
      .then(wines => {
        setWines(wines)
      })
      .catch(error => {
        console.log(error)
        setWines([])
      })

  }, [])

  return (
    <div>
      <WineList wines={wines} />
    </div>
  )
}

export default App
