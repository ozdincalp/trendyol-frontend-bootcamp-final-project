import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Game } from "./components/pages/Game/Game";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
