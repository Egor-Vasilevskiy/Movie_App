import Header from './components/Header'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { Search } from './components/Search'
import { Save } from './components/Save'
import { Trend } from './components/Trend'
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/Trend" >
            <Trend />
          </Route>
          <Route path="/Save">
            <Save /> 
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>  
  )
}

export default App;
