import {useState, useEffect} from 'react'
import Columns from './components/Columns/Columns'
import {initializeCards} from './utils/index'
import './App.scss'

const App = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
      setDecks(initializeCards());
  },[]);

  return (
      <div>
        {decks.length ? <Columns decks={decks[0]}/> : null}
      </div>
  )
}

export default App
