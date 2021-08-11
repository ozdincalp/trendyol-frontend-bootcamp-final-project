import {useState, useEffect} from 'react'
import Columns from './components/Columns/Columns'
import SpareDecks from './components/SpareDecks/SpareDecks'
import {initializeCards} from './utils/index'
import './App.scss'

const App = () => {
  const [initialDecks, setInitialDecks] = useState([]);
  const [spareDecks, setSpareDecks] = useState([]);

  useEffect(() => {
    const [initialDecks, spareDecks] = initializeCards();
      setInitialDecks(initialDecks);
      setSpareDecks(spareDecks);
  },[]);

  return (
      <div>
        {spareDecks.length ? <SpareDecks decks={spareDecks} setDecks={setInitialDecks} setSpareDecks={setSpareDecks}/> : null}
        {initialDecks.length ? <Columns decks={initialDecks} setDecks={setInitialDecks}/> : null}
      </div>
  )
}

export default App
