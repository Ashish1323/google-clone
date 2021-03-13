import { BrowserRouter as Router, Switch, Route } from
  "react-router-dom";
  
  import Home from './pages/home'


function App() {
  return (
    <div className="App">

    <Router>
      <Switch>
        <Route path="/search">
            <h1>Search bsdk</h1>
        </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
