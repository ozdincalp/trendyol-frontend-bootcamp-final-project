import {useState, useEffect} from 'react'
import './App.scss'
import Columns from './components/Columns/Columns'
import {initializeCards} from './utils/index'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const App = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
      setDecks(initializeCards());
  },[]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {decks.length ? <Columns decks={decks[0]}/> : null}
      </div>
    </DndProvider>
  )
}

export default App
